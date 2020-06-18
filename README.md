# password-generator 
For this assigment we were supposed to create a password generator that could generator a password according to different parameters. This password could be from 8 to 128 characters, and had the option of including, lowercase letters, uppercase letters, numbers, and special characters. To create this I started by initializing arrays that held  the different character sets we were working with. I also initialized an empty array for all the letters that I will need, and one for the final password. After this I created a new function called generatePassword, where I assigned boolean variables to the responses to questions relating to what characters the user would want. I then concatenated the arrays full of letters and numbers to the empty array depending on the response to the questions. Lastly I used a for loop to select a random index, and select the letter that would be used for the password. The array looped over the length that the password was supposed to be. The final product is demonstrated below:

![](Password-Generator.gif)

## Getting Started

To get this project running, one must copy the files from the class repository.

### Prerequisites

To have this project run, one must download VS Code off the appstore, and create a GitHub account. Git is also required to run this program, which can be downloaded 

```
$ brew install git. 
```
Homebrew can also be downloaded by inputting the following command in the terminal:
```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```

### Installing

To install this project one must go through the GitHub website in order to clone this project. Clicking on the cone or download button and then copying the link that comes from that. One can then go into the Terminal application, and use the following command to copy the files:
`
git clone URL
`
This should then be moved to your desktop, or somewhere else on your computer. This will allow access to the html and css files. Opening the html file in a default browser will allow one to observe the website.

## Built With

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## Deployed Link

* [See Live Site](https://aidansweeny.github.io/password-generator/)

## Authors

* Aidan Sweeny

- [Link to Github](https://github.com/AidanSweeny)
- [Link to LinkedIn](https://www.linkedin.com/in/aidan-sweeny-81075030/)

## License

This project is licensed under the MIT License 

## Acknowledgments

* Berkley Coding Bootcamp

