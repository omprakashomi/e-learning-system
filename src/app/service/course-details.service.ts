import { Injectable } from '@angular/core';
import { Courses } from '../courses';

@Injectable({
  providedIn: 'root'
})
export class CourseDetailsService {
 

  constructor() { }

  getAll():Courses[]{
  return[
    {
      id:1,
      courseName:"Python Tutorial",
      coursePrice:"Free",
      courseImg:'../../../assets/Python-programming.jpg',
      stars:4.5,
      quiz:'https://docs.google.com/forms/d/e/1FAIpQLSeddFKf58kmX78PRy0DXWHEapBFw_aNZoIJHUJiYHTBhkEeYQ/viewform?usp=sf_link',
      video:'_uQrJ0TkZlc',
      description:'Python is a high-level, general-purpose and a very popular programming language. Python programming language (latest Python 3) is being used in web development, Machine Learning applications, along with all cutting edge technology in Software Industry. Python Programming Language is very well suited for Beginners, also for experienced programmers with other programming languages like C++ and Java.'
    },
  
    {
      id:2,
      courseName:"JavaScript Tutorials",
      coursePrice:"Free",
      courseImg:'../../../assets/javascript.jpg',
      stars:4.0,
      quiz:'https://docs.google.com/forms/d/e/1FAIpQLSeddFKf58kmX78PRy0DXWHEapBFw_aNZoIJHUJiYHTBhkEeYQ/viewform?usp=sf_link',
      video:'W6NZfCO5SIk',
      description:'JavaScript is a lightweight, cross-platform, and interpreted scripting language. It is well-known for the development of web pages, many non-browser environments also use it. JavaScript can be used for Client-side developments as well as Server-side developments. JavaScript contains a standard library of objects, like Array, Date, and Math, and a core set of language elements like operators, control structures, and statements. '
    },
    
  
    {
      id:3,
      courseName:"Data Science Foundations",
      
      coursePrice:"Free",
      courseImg:'../../../assets/datascience.jpg',
      stars:3.5,
      quiz:'https://docs.google.com/forms/d/e/1FAIpQLSeddFKf58kmX78PRy0DXWHEapBFw_aNZoIJHUJiYHTBhkEeYQ/viewform?usp=sf_link',
      video:'ua-CiDNNj30',
      description:'In a world of data space where organizations deal with petabytes and exabytes of data, the era of Big Data emerged, the essence of its storage also grew. It was a great challenge and concern for industries for the storage of data until 2010. Now when frameworks like Hadoop and others solved the problem of storage, the focus shifted to processing of data. Data Science plays a big role here. All those fancy Sci-fi movies you love to watch around can turn into reality by Data Science. Nowadays it’s growth has been increased in multiple ways and thus one should be ready for our future by learning what it is and how can we add value to it. Without any hunches, let’s dive into the world of Data Science.'
    },
    {
      id:4,
      courseName:"Front End Development",
      coursePrice:"Free",
      courseImg:'../../../assets/frontend.png',
      stars:4.5,
      quiz:'https://docs.google.com/forms/d/e/1FAIpQLSeddFKf58kmX78PRy0DXWHEapBFw_aNZoIJHUJiYHTBhkEeYQ/viewform?usp=sf_link',
      video:'QA0XpGhiz5w',
      description:'If you would like to get started as a front-end web developer, you are going to LOVE this course! Work on projects ranging from a simple HTML page to a complete JavaScript based Google Chrome extension. We will cover the following technologies in this course'

      
    },
  
    {
      id:5,
      courseName:"Java Programming",
      coursePrice:"Free",
      courseImg:'../../../assets/java.png',
      stars:4.5,
      quiz:'https://docs.google.com/forms/d/e/1FAIpQLSeddFKf58kmX78PRy0DXWHEapBFw_aNZoIJHUJiYHTBhkEeYQ/viewform?usp=sf_link',
      video:'Qgl81fPcLc8',
      description:'Java is one of the top five programming languages and here is here to stay. Java is used enterprise applications, backend services, websites, embedded controllers, and Android app development. Java is the mother of languages such as python, golang, javascript and many. This means that once you master Java the rest of languages will be easy to grasp.'
    },
    {
      id:6,
      courseName:"Excel for Beginners",
      coursePrice:"Free",
      courseImg:'../../../assets/excel.jpg',
      stars:4.5,
      quiz:'https://docs.google.com/forms/d/e/1FAIpQLSeddFKf58kmX78PRy0DXWHEapBFw_aNZoIJHUJiYHTBhkEeYQ/viewform?usp=sf_link',
      video:'k1VUZEVuDJ8',
      description:'Advanced Excel is a course aimed at the excel user who is fairly competent on the software but is just looking for a few more handy tips and tricks to really get to know what this software can do. If you are handling data, or have the responsibility for analyzing data or presenting information in a useful format - reports for your team, or managers etc., then this course will be very handy.'
    },
    {
      id:7,
      courseName:"MySQL Basics",
      coursePrice:"Free",
      courseImg:'../../../assets/mysql.jpg',
      stars:4.0,
      quiz:'https://docs.google.com/forms/d/e/1FAIpQLSeddFKf58kmX78PRy0DXWHEapBFw_aNZoIJHUJiYHTBhkEeYQ/viewform?usp=sf_link',
      video:'7S_tz1z_5bA',
      description:'MySQL is the most popular Open Source Relational SQL Database Management System. MySQL is one of the best RDBMS being used for developing various web-based software applications. MySQL is developed, marketed and supported by MySQL AB, which is a Swedish company.This tutorial will give you a quick start to MySQL and make you comfortable with MySQL programming.'
      
    },
    {
      id:8,
      courseName:"Data Science with Python",
      coursePrice:"Free",
      courseImg:'../../../assets/datascience.jpg',
      stars:4.5,
      quiz:'https://docs.google.com/forms/d/e/1FAIpQLSeddFKf58kmX78PRy0DXWHEapBFw_aNZoIJHUJiYHTBhkEeYQ/viewform?usp=sf_link',
      video:'r-uOLxNrNk8',
      description:'Data Science with Python begins by introducing you to data science and teaches you to install the packages you need to create a data science coding environment. You will learn three major techniques in machine learning: unsupervised learning, supervised learning, and reinforcement learning. You will also explore basic classification and regression techniques, such as support vector machines, decision trees, and logistic regression.'
    },
    {
      id:9,
      courseName:"Jupyter Notebook",
      coursePrice:"Free",
      courseImg:'../../../assets/jupyter.png',
      stars:3.0,
      quiz:'https://docs.google.com/forms/d/e/1FAIpQLSeddFKf58kmX78PRy0DXWHEapBFw_aNZoIJHUJiYHTBhkEeYQ/viewform?usp=sf_link',
      video:'HW29067qVWk',
      description:'Project Jupyter is a comprehensive software suite for interactive computing, that includes various packages such as Jupyter Notebook, QtConsole, nbviewer, JupyterLab.This tutorial gives you an exhaustive knowledge on Project Jupyter. By the end of this tutorial, you will be able to apply its concepts into your software coding.'
    },
    {
      id:10,
      courseName:"Cloud Computing Introdution",
      coursePrice:"Free",
      courseImg:'../../../assets/cloud.jpg',
      stars:4.0,
      quiz:'https://docs.google.com/forms/d/e/1FAIpQLSeddFKf58kmX78PRy0DXWHEapBFw_aNZoIJHUJiYHTBhkEeYQ/viewform?usp=sf_link',
      video:'6VRatA0SAwE',
      description:'With the advent of internet, there is a complete paradigm shift in the manner we comprehend computing. Need to enable ubiquity, convenient and on-demand access to resources in highly scalable and resilient environments that can be remotely accessed, gave birth to the concept of Cloud computing. The acceptance is so rapid that the notion influences sophisticated innovations in academia, industry and research world-wide and hereby change the landscape of information technology as we thought of. Through this book, the authors tried to incorporate core principles and basic notion of cloud computing in a step-by-step manner and tried to emphasize on key concepts for clear and thorough insight into the subject.'
    },
    {
      id:11,
      courseName:"C Programming",
      coursePrice:"Free",
      courseImg:'../../../assets/cprogramming.png',
      stars:3.0,
      quiz:'https://docs.google.com/forms/d/e/1FAIpQLSeddFKf58kmX78PRy0DXWHEapBFw_aNZoIJHUJiYHTBhkEeYQ/viewform?usp=sf_link',
      video:'87SH2Cn0s9A',
      description:'In this course I will be covering all the Basic concepts related to programming, Data types & variables, Variety of Operators along with examples, Control Statements in C- such as if, if-else, nested if, else-if ladder, switch case etc. each with detail examples explained. also Looping statements- while, do-while, for with examples, more emphasis on - User defined functions, Function Prototype, Function Definition, Function Prototype, Argument list, Parameter passing etc. Also Arrays, String, Structure concepts are explained with lots of Programming Problems. Most importantly Pointers & their implementation explained in detail.'
    },
    {
      id:12,
      courseName:"Introduction to Cyber Security",
      coursePrice:"Free",
      courseImg:'../../../assets/cyber.jpg',
      stars:4.0,
      quiz:'https://docs.google.com/forms/d/e/1FAIpQLSeddFKf58kmX78PRy0DXWHEapBFw_aNZoIJHUJiYHTBhkEeYQ/viewform?usp=sf_link',
      video:'U_P23SqJaDc',
      description:'We provide you with step by step guide to enhance your knowledge of Cyber Security tools and other cyber networking technologies. It comes along with a course that will guide you with your preparation for the Network+ certification exam '
    },
    {
      id:13,
      courseName:"Data Visualization using Python",
      coursePrice:"Free",
      courseImg:'../../../assets/datavisual.jpeg',
      stars:4.5,
      quiz:'https://docs.google.com/forms/d/e/1FAIpQLSeddFKf58kmX78PRy0DXWHEapBFw_aNZoIJHUJiYHTBhkEeYQ/viewform?usp=sf_link',
      video:'DAQNHzOcO5A',
      description:'If you want to work in exciting analytics and data visualization project, then this is the starting point for you.Data is the currency of now and potential to use it the right way, at the right time for the right reason gives you possibility beyond imagination.Data visualization is a vast topic and consist of many sub-parts which are a subject in itself, we in our course have tried to paint a clear picture of what you need to know and what people will be looking of you in a visualization project b  UX in Data visualization is key in modern times to meet the expectation of your user, this course will highlight what are the benefits of using a good UX and how to do it.This course is structured to provide all the key aspect of Data visualization in most simple and clear fashion.So you can start the journey in Data visualization world.'
    }
  
  ]
}

 

}
