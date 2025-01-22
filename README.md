# Length Converter


## The Plan
By creating and implementing the Length converter application for my workplace, I will be able to integrate this tool. With the workplace industry being pharmaceutical the length converter will be used in the labs for accurate measurement of particle sizes or in the manufacturing teams for packaging material measurements, these are just 2 examples of how this tool can be utilised in the industry. The measurements that the tool will work with are:
* Inches
* Centimetres 
* Meters
Inches, centimetres, and meters have been used here as in the pharmaceutical industry these will offer flexible measurement options for global standards to ensure accurate and standard product measurements across different regions 

## Application Requirements 

Functional Requirements:

*  Length Conversions – The application must convert between Inches, Centimetres, and Metres.
*  User Input Handling – The application must allow users to input any numerical values for lengths in any of the lengths.
*  Error Handling – User input must be validated to ensure it is a valid number. Errors should be displayed for invalid inputs such       as negative numbers.
*  User Interface – Real-Time Conversion – The application must perform the conversions and display the results immediately after the 
   user enters a value, providing real-time feedback.

Non-Functional Requirements:

*  Performance – The application must load quickly and perform real-time conversions without noticeable delays.
*  Compatibility – The application must be compatible with major browsers and work seamlessly on various devices, including desktops       and laptops.
*  User Interface- The Responsive Design UI ensures the app adapts seamlessly to different screen sizes, providing an optimal         
    experience.
*   Usability – The application must have a clear, an easy-to-use interface, to ensure that users can quickly input and convert     
    lengths correctly.
*   Relability – The application must provide accurate length conversions between Inches, Centimetres, and Metres.

## Design
For the design I used CodePen, which helped to build the interface and visualise what I intended to build. With access to the code and able to visualise what I was building as a use of trial and error to improve the application throughout the  development phase. I chose this design after altering the code to keep a simple look but also a professional style with the colour of the outline of the box  I focussed on aiming that the colour scheme used met requirements for accessibility through following Web AIM accessibility testing services which gave me a contrast score of 7.45:1, which passes all test for text and graphical objects and UI components. Through user feedback on initial prototypes of the app, I changed the code and altered the shapes, colours and functionality of the app so it is fit for purpose and meets user requirements gathered from scientists and manufacturing who will need to use this application.

## Project Management 

For the project development of the Length converter application, I used a scrum project management approach, being an agile framework as I used the sprints as best practice with this style. The scrum method allows the team to collaborate efficiently and allows regular feedback and testing to help the application develop successfully, the stages of the approach included sprint planning, design, development testing and a sprint review. 
Each sprint lasted 1 week and was focused on improving the previous issues discussed after a review of the current app's status and development. Using the sprint reviews to gather the user's feedback helped to progress the application and improve the app in a thorough process. I was able to prioritise improvements with a clear structure and efficient manner with the help of a Kanban board used to track the progress. Using this for visualising the workflow with clearly defined stories and the items which were in backlog was key to success. The stories were broken down into smaller tasks and these were completed within sprints within a week our goal between improvements. This board gave the team a clear vision and was able to hold people accountable and set the standards for what we needed to achieve within each Sprint.

![image](https://github.com/user-attachments/assets/98c3d8ff-464e-47c1-8c05-2dfdb5e5b3da)


With a visual workflow in place of the Kanban board is easy to track the overall status of the development and able to share with the team a clear visual for the next sprint. The transparency within the team with clear plans and vision before reaching sprint helps with accountability and the ability to regularly assess how the project was progressing towards the Sprint goals. The continuous flow of tasks moves from one area to another in the 3 sections of the board including backlog, in progress and complete. For example in one of the unit testing phases it was moved from backlog to in progress during the sprint so when the team met we knew what needed to be prioritised in that sprint. 

### Installation
1- Ensure node is installed:

   ```sh
   node -v
   ```
If it is not installed enter the following:

   ```sh
   npm install -g npm
   ```

2. Ensure npm is installed

   ```sh
   npm -v
   ```

3. Clone the repository:

   ```sh
   git clone https://https://patrickm320.github.io/Length-Converter.git
   ```
   
4. Run the unit tests by entering the following:

   ```sh
   npm test
   ```

### Develoment Process
The Length converter application was developed by following modern web development practices, this app was designed for manufacturing and the scientific departments of the pharmaceutical industry it will be used in, The tools are designed for easy use and accurate conversions between Inches, centimetres and meters, accommodating the global standards required in the labs and manufacturing areas.

### Technical Implementation
The application was built using HTML, CSS and JavaScript to prioritise performance responsiveness and usability. JavaScript is used to manage real-time unit conversions to ensure an efficient interaction across different measurements. The design is responsive and implemented to allow compatibility with all devices, ensuring consistent functionality in the labs or any manufacturing areas on any device.

Testing of the application was completed with iterative prototypes, using CodePen to visualise the interface and alter the design. These changes were managed to ensure compliance such as WebAIM accessibility until a 7.45;1, which meets all standards for accessibility of text, graphical objects and UI requirements.  With sprints from feedback, this was managed and improved to meet the required standards. 

### Test-driven development 
To ensure the app's reliability, the development followed a Test-Drive development method. Unit testing using Jest to validate the core functionalities like length conversion, and puppeteer end-to-end tests were used to ensure that the conversions were real-time and accurate. The testing was thorough to ensure the performance of the applications and reliability meeting the standards required in the pharmaceutical industry. 

### Issue Management and Sequential Development
The development process used a linear approach to prioritize the features and any bugs based on the needs of the users in the pharmaceutical industry. High-priority tasks with the code conversion logic were completed first to help establish functionality and then the UI to improve error handling. The initial sprints focused on implementing core features, whilst the sprints later on in the project were used to address the apps performance, usability and accessibility.  


### Testing

With testing the ode being an important part of the project, testing agasint the componnets and aims of the completion of the app which was set at the begging of the project to ensure the application works as intended, I have completed a test for each requirement:

 ![image](https://github.com/user-attachments/assets/b3073c76-1e32-4f73-a323-de35ce6a4d01)


 
![image](https://github.com/user-attachments/assets/ecafbbe5-a187-43b2-a6d4-c2d81bdf534c)


























