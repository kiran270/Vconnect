# Vconnect
Vconnect forgot password and change password                                                                                                

Steps to Run the application on your machine                                                                                                 

step1:Install mysql database.
step2:clone the repository.                                                                                                                
      Note:If there is no github account download the code from the repository and unzip.                                                  
step3:create database in mysql using the command "create database vconnect";                                                                
step4:start working created database by using the command "Use vconnect";                                                                      
step5:create a users table by following command                                                                                            
        CREATE TABLE `Users` (
          `username` VARCHAR(50) NOT NULL DEFAULT '',
          `password` VARCHAR(50) DEFAULT NULL,
          `answer1` VARCHAR(100) DEFAULT NULL,
          `answer2` VARCHAR(100) DEFAULT NULL,
          PRIMARY KEY (`username`)
        );
