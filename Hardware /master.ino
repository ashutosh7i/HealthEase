/*
* Code Author- Ashutosh7i @ https://ashutosh7i.dev
*/

// Include Libraries
    // DF Player mini
    #include "DFRobotDFPlayerMini.h"
    // RTC Clock
    #include <RTClib.h>
    // RFID Module
    #include <SPI.h>
    #include <MFRC522.h>
    // MAX30102 Module
    #include <MAX3010x.h>
    #include "filters.h"
    // Servo 
    #include <ESP32Servo.h>
    // CoinSwitch
    #include <ezButton.h>

// Define
    // DF Player mini
    #define MP3_TX 26
    #define MP3_RX 27
    // RFID Module
    #define SS_PIN 5
    #define RST_PIN 15
    // Servo 
    #define Servo_PIN 33
    // CoinSwitch 
    #define Coin_PIN 34
    #define DEBOUNCE_TIME 50
    // Buzzer
    #define Buzzer_Pin 25

// Instantiate 
    DFRobotDFPlayerMini audioPlayer;  // DF Player mini
    RTC_DS1307 myClock;               // RTC Clock
    MFRC522 myRFID = MFRC522(SS_PIN, RST_PIN);  // RFID Module
    Servo doorServo;                  // Servo Module
    MAX30105 sensor;                  // MAX30102 Sensor
    ezButton coinSwitch(Coin_PIN); // create ezButton object that attach to pin GPIO21
    
// Variables
    // RFID Module
    String masterTagID = "F3332D2E";   // Registered RFID User
    String scanTagID = "";            // To capture care tapped
    // RTC Clock
    char daysOfWeek[7][12] = {"Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"};
    // CoinSwitch debounce time
    int debounceTime = 50; // milliseconds
    String currentDate, currentTime, formattedDate,formattedTime;
    
    
// Variable for message data
    String Location = "indore";
    String Date;
    String Time;
    int hr = 80;
    int spo2 = 96;
    int glucose = 140;

// Function Definations
    bool testSim800L();
    bool sendATCommand();
    bool readTagID();
    void sendSMS();
    void playBuzzer();


/*
Variable instances for MAX30102 
*/
const auto kSamplingRate = sensor.SAMPLING_RATE_400SPS;
const float kSamplingFrequency = 400.0;

// Finger Detection Threshold and Cooldown
const unsigned long kFingerThreshold = 10000;
const unsigned int kFingerCooldownMs = 500;

// Edge Detection Threshold (decrease for MAX30100)
const float kEdgeThreshold = -2000.0;

// Filters
const float kLowPassCutoff = 5.0;
const float kHighPassCutoff = 0.5;

// Averaging
const bool kEnableAveraging = false;
const int kAveragingSamples = 5;
const int kSampleThreshold = 5;

void setup() {
    // Init USB serial port for debugging
    Serial.begin(9600);

    // Init serial port 1 for DFPlayer Mini
    Serial1.begin(9600, SERIAL_8N1, MP3_RX, MP3_TX);

    // Init serial port 2 for SIM800L Module
    Serial2.begin(9600);

    // Initiate DF Player mini
    if (audioPlayer.begin(Serial1)) {
    Serial.println("initialized:- DF Player Mini");
    }
    else {Serial.println("failed:- DF Player Mini");}

    // Initiate RTC Module
    if (! myClock.begin()) {
    Serial.println("failed:- RTC Module");
    Serial.flush();
    //while (1);
    }
    else {Serial.println("initialized:- RTC Module");}

    // Initiate RFID Module
    SPI.begin();
    myRFID.PCD_Init();
    Serial.println("initialized:- RFID Module");

     // Initiate SIM800L
    if (testSim800L()) {
    Serial.println("initialized:- SIM800L Module");
    } else {
    Serial.println("failed:- SIM800L Module");
    }

    // Initiate MAX30102
    if (sensor.begin() && sensor.setSamplingRate(kSamplingRate)) { 
    Serial.println("initialized:- MAX30102 Sensor");
    } else {
    Serial.println("failed:- MAX30102 Sensor");  
    //while(1);
    }

    // Initiate Servo
    if(!doorServo.attached()) {
    doorServo.setPeriodHertz(50); // standard 50 hz servo
    doorServo.attach(33, 1000, 2000); // Attach the servo after it has been detatched
    Serial.println("Servo Motor attached");
    } else {
    doorServo.setPeriodHertz(50); // standard 50 hz servo
    Serial.println("initialized:- Servo Motor");  
    }
  
    // Initiate CoinSwitch
    coinSwitch.setDebounceTime(debounceTime);
    Serial.println("initialized:- CoinSwitch");
    
    pinMode(Buzzer_Pin, OUTPUT);
    Serial.println("initialized:- Buzzer");
     
    playBuzzer(1000);
 
    // Config- 
    audioPlayer.volume(30);  // DF Player Volume (0 to 30).
    //myClock.adjust(DateTime(F(__DATE__), F(__TIME__)));  // automatically sets the RTC to the date & time on PC this sketch was compiled

    audioPlayer.play(0001);
    doorServo.write(40);
    

    DateTime now = myClock.now();   // print dateTime
    Serial.print("RTC Date Time: ");
    Serial.print(now.year(), DEC);
    Serial.print('/');
    Serial.print(now.month(), DEC);
    Serial.print('/');
    Serial.print(now.day(), DEC);
    Serial.print(" (");
    Serial.print(daysOfWeek[now.dayOfTheWeek()]);
    Serial.print(") ");
    Serial.print(now.hour(), DEC);
    Serial.print(':');
    Serial.print(now.minute(), DEC);
    Serial.print(':');
    Serial.println(now.second(), DEC);

  // Format date as YYYYMMDD
  currentDate = String(now.year(), DEC) + String(now.month(), DEC) + String(now.day(), DEC);
      Serial.println(currentDate);


  // Format time as HHMM
  currentTime = String(now.hour(), DEC) + String(now.minute(), DEC);
      Serial.println(currentTime);


   // Format current date
  Date = String(now.day(), DEC) + '/' + String(now.month(), DEC) + '/' + String(now.year(), DEC) ;
      Serial.println(Date);


  // Format current time
  Time = String(now.hour(), DEC) + ':' + String(now.minute(), DEC);
      Serial.println(Time);
   

}

/*MAX30102 Filter instances*/
// Filter Instances
LowPassFilter low_pass_filter_red(kLowPassCutoff, kSamplingFrequency);
LowPassFilter low_pass_filter_ir(kLowPassCutoff, kSamplingFrequency);
HighPassFilter high_pass_filter(kHighPassCutoff, kSamplingFrequency);
Differentiator differentiator(kSamplingFrequency);
MovingAverageFilter<kAveragingSamples> averager_bpm;
MovingAverageFilter<kAveragingSamples> averager_r;
MovingAverageFilter<kAveragingSamples> averager_spo2;

// Statistic for pulse oximetry
MinMaxAvgStatistic stat_red;
MinMaxAvgStatistic stat_ir;

// R value to SpO2 calibration factors
// See https://www.maximintegrated.com/en/design/technical-documents/app-notes/6/6845.html
float kSpO2_A = 1.5958422;
float kSpO2_B = -34.6596622;
float kSpO2_C = 112.6898759;

// Timestamp of the last heartbeat
long last_heartbeat = 0;

// Timestamp for finger detection
long finger_timestamp = 0;
bool finger_detected = false;

// Last diff to detect zero crossing
float last_diff = NAN;
bool crossed = false;
long crossed_time = 0;
/*MAX30102 Filter instances*/



void loop() {


  // Dependency for button
 coinSwitch.loop(); // MUST call the loop() function first
    // put your main code here, to run repeatedly:

     // RFID Module
     while (readTagID()){

        // coinSwitch usage
      if (coinSwitch.isPressed()){
      Serial.println("The button is pressed");
      // show modal
      }

      // if registered user,
       if (scanTagID == masterTagID){  // if registered user
        Serial.println("Access Granted ");
        Serial.println("Welcome: ");
        Serial.print(scanTagID);
        doorServo.detach(); // Turn the servo off for a while
        delay(2000);
        // open door
        playBuzzer(200);
        doorServo.write(0);
       
        audioPlayer.play(0002);
        // play place finger
        audioPlayer.play(0007);
        

        //start reading for 20s
        // show reading in serial

        // play buzzer
        playBuzzer(400);
        doorServo.write(0);
        //send sms
        
  String message = "Hi There,\n\nThank you for using Healthease\n\nHere is your report for scan done at:-\n";
  message += "Location: " + Location + "\n";
  message += "Date: " + Date + "\n";
  message += "Time: " + Time + "\n";
  message += "#Report-\n";
  message += "Heartbeat: " + String(hr) + " bpm\n";
  message += "SpO2: " + String(spo2) + " %\n";
  message += "Glucose: " + String(glucose) + " g/ml\n\n";
  message += "You can click on the link given below to view your reports in detail.\n";
  message += "https://healthease.ashutosh7i.dev/publicdashboard?name=aashutoshsoni&mobile=1234567890&datetime=" + Date + "t" + Time +"&hr=" + String(hr) + "&spo2=" + String(spo2) + "&gc=" + String(glucose);

         sendSMS("+919302188441", message);
         //thank user
         audioPlayer.play(31);
         break;
       }
       else{                           // unknown user
         Serial.print("Access Denied  "); 
         Serial.print("Not Authorized: ");
         Serial.print(scanTagID);
       }
      //  Serial.println("Scan Your Card*");

     }


    /**
     * todo-
     * 0. set servo to 0
     * 1. add trigger on coin switch trigger
     * 2. add trigger on rfid tap
     * 3. if( coin switch trigger ){ show modal, take data, open door, play audios, show modal, close door, send data, send sms }
     * 4. if( rfid ){ show modal, show data, continue, open door, play audios, show modal, close door, send data, send sms }
     * 
     * 
    */
//
//
  auto sample = sensor.readSample(1000);
  float current_value_red = sample.red;
  float current_value_ir = sample.ir;
  
  // Detect Finger using raw sensor value
  if(sample.red > kFingerThreshold) {
    if(millis() - finger_timestamp > kFingerCooldownMs) {
      finger_detected = true;
    }
  }
  else {
    // Reset values if the finger is removed
    differentiator.reset();
    averager_bpm.reset();
    averager_r.reset();
    averager_spo2.reset();
    low_pass_filter_red.reset();
    low_pass_filter_ir.reset();
    high_pass_filter.reset();
    stat_red.reset();
    stat_ir.reset();
    
    finger_detected = false;
    finger_timestamp = millis();
  }

  if(finger_detected) {
    current_value_red = low_pass_filter_red.process(current_value_red);
    current_value_ir = low_pass_filter_ir.process(current_value_ir);

    // Statistics for pulse oximetry
    stat_red.process(current_value_red);
    stat_ir.process(current_value_ir);

    // Heart beat detection using value for red LED
    float current_value = high_pass_filter.process(current_value_red);
    float current_diff = differentiator.process(current_value);

    // Valid values?
    if(!isnan(current_diff) && !isnan(last_diff)) {
      
      // Detect Heartbeat - Zero-Crossing
      if(last_diff > 0 && current_diff < 0) {
        crossed = true;
        crossed_time = millis();
      }
      
      if(current_diff > 0) {
        crossed = false;
      }
  
      // Detect Heartbeat - Falling Edge Threshold
      if(crossed && current_diff < kEdgeThreshold) {
        if(last_heartbeat != 0 && crossed_time - last_heartbeat > 300) {
          // Show Results
          int bpm = 60000/(crossed_time - last_heartbeat);
          float rred = (stat_red.maximum()-stat_red.minimum())/stat_red.average();
          float rir = (stat_ir.maximum()-stat_ir.minimum())/stat_ir.average();
          float r = rred/rir;
          float spo2 = kSpO2_A * r * r + kSpO2_B * r + kSpO2_C;



          float glu;
     
        glu = ((214.11*r)-10.033);
     

     
          if(bpm > 50 && bpm < 250) {
            // Average?
            if(kEnableAveraging) {
              int average_bpm = averager_bpm.process(bpm);
              int average_r = averager_r.process(r);
              int average_spo2 = averager_spo2.process(spo2);
  
              // Show if enough samples have been collected
              if(averager_bpm.count() >= kSampleThreshold) {
                Serial.print("Time (ms): ");
                Serial.println(millis()); 
                Serial.print("Heart Rate (avg, bpm): ");
                Serial.println(average_bpm);
                Serial.print("R-Value (avg): ");
                Serial.println(average_r);  
                Serial.print("SpO2 (avg, %): ");
                Serial.println(average_spo2);
                Serial.print(" / Glucose");
                Serial.print(glu);
                Serial.println("mg/dl");  
              }
            }
            else {
              Serial.print("Time (ms): ");
              Serial.println(millis()); 
              Serial.print("Heart Rate (current, bpm): ");
              Serial.println(bpm);  
              Serial.print("R-Value (current): ");
              Serial.println(r);
              Serial.print("SpO2 (current, %): ");
              Serial.println(spo2);
              Serial.print(" / Glucose");
              Serial.print(glu);
              Serial.println("mg/dl");   
            }
          }

          // Reset statistic
          stat_red.reset();
          stat_ir.reset();
        }
  
        crossed = false;
        last_heartbeat = crossed_time;
      }
    }

    last_diff = current_diff;
  }
}



// Utility Functions-

  //Take reading function
  /*
    Todo-
    1. open door 
    2. play buzzer,
    3. play audio
    4. take reading for 20s
    5. play closing audio
    6. play buzzer
    7. close door
    8. make a average of those readings
    9 return reading as a json object
  */

    // Read RFID
    bool readTagID(){
        if (!myRFID.PICC_IsNewCardPresent()){    // Look for new 1 cards
          return false;
        }
        if (!myRFID.PICC_ReadCardSerial()){      // Verify if the NUID has been readed
          return false;
        }
        scanTagID = "";                     // clear old card id 
        for ( uint8_t i = 0; i < 4; i++){   // replace with new card id
          scanTagID += String(myRFID.uid.uidByte[i], HEX);
        }
        scanTagID.toUpperCase();
        myRFID.PICC_HaltA();
        return true;
    }

    // Function to test SIM800L
    bool testSim800L() {
      // Check if SIM800L is registered to the network
      if (!sendATCommand("AT+CREG?", "0,1")) {
        return false;
      }

      // Set SIM800L in message sending mode
      if (!sendATCommand("AT+CMGF=1", "OK")) {
        return false;
      }

      return true;
    }

    // Function to send AT command and check the response
    bool sendATCommand(const char* command, const char* expectedResponse) {
      Serial2.println(command);
      delay(500); // Adjust the delay based on your module's response time

      // Check the response
      if (Serial2.find(expectedResponse)) {
        return true;
      } else {
        Serial.print("Failed command: ");
        Serial.println(command);
        return false;
      }
    }

    // Function to send SMS
    void sendSMS(const char* phoneNumber, const String message) {
      Serial2.println("AT+CMGF=1"); // Configuring TEXT mode
      Serial2.println(); // To clear the buffer
      delay(500);

      char command[30];
      sprintf(command, "AT+CMGS=\"%s\"", phoneNumber);
      Serial2.println(command);
      delay(500);

      Serial2.print(message); // Text content
      delay(500);

      Serial2.write(26);
      delay(500);

      Serial.println("Message Sent");
    }


    void playBuzzer(int duration){
  digitalWrite(Buzzer_Pin, HIGH);   // turn the LED on (HIGH is the voltage level)
  delay(duration);                       // wait for a second
  digitalWrite(Buzzer_Pin, LOW);  
    }
