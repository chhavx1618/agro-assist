# Agro Assist

Welcome to Agro Assist!
Here, we offer a solution for your farming needs.

## Following the theme

Soil is a very important biological resource of our world. But, it is being consumed at an exponentially increasing rate. Bad management of crops and agriculture land, poor estimations of irrigation, fertilization, and amounts of chemical addition all lead to a destruction in the quality of soil.
#### Our solution aims to reduce this problem and work on conserving the soil and protecting the heritage of soil and crops.

##  Problem Statement

Using Sustainable and Precision Agriculture to contribute to conservation of soil and heritage of plants and crops.

## Solution

It has been observed over years that crops fail due to inadequate treatment and conditions. This is where our solution steps in. Providing the farmers with proper tested and optimal recommendations, using live data of their own field, would lead to better crop production, in quality as well as volume and better preservation of soil. Using Machine Learning, we have trained the system to judge your soil and plant conditions and give an overview of how healthy your field is. 

## How it works

Sensors are deployed throughout your field and on the soil to measure the levels of moisture, temperature, humidity, pH and more. These values are shared with you, the user, who can make decisions accordingly, keeping the best outcomes in mind. Our system also gives you recommendations based on the overall health of the plants or soil that we have detected.

## Screen shots



## Tech used

We have build this system using NodeJS and ExpressJs for the server, HTML, CSS and JavaScript for the client side server. We have used Tenserflow to train an ML model that takes in data from your field and makes predictitons based on it. 
The sensors in your field are connected to microcontrollers, which send data to our server using LoRaWAN protocol. This data is collected and stored. (For this hackathon, we are not taking data from the sensors)

## Future Scope

Precision and sustainable farming practices go a long way.
Drone monitoring of crops, livestock monitoring through gps and sensors to avoid overgrazing and keeping a track of their health, GPS and satellite mapping of fields to create maps of soil quality in different areas are some innovative solutions that can be brought in and added to agri-tech solutions. Creating system that has the capability to be able to detect the diseases based on the data collected by sensors, and would be able to suggest the best sure to prevent or cure it. This would require more efficient and sophisticated technologies for maximum optimization of resources. 
In the scope of this project, we can make developments in the hardware, aiming to bring more accurate data from your field, storing and processing it using cloud for more efficiency in data handling as well as scaling the system. We can deploy our model on cloud and automate its periodical training and retraining to make more accurate predictions. We can also, for very large fields and farm systems, leverage edge computing and deploy instances of our model and more on edge servers at different nodes for faster and more efficient predictions.
