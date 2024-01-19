# Mahanyasa-Personal-Portfolio-2.0
            
Welcome to the second version of my portfolio! This GitHub repository contains the HTML, CSS, and JavaScript code for my updated personal website, showcasing my skills, projects, and experiences. You can use this repository as a                    reference, fork it, or customize it for your own portfolio.
            
- Description
   This portfolio is designed to provide a professional and interactive platform to showcase my work and skills. It serves as a hub for potential employers, clients, and collaborators to learn more about me and my projects.

- Features
   - Responsive Design: The portfolio is designed to be fully responsive, ensuring a seamless experience on various devices and screen sizes.
   - Project Showcase: Highlight your projects, including descriptions, images, and links.
   - About Me: Introduce yourself with a detailed biography and your career goals.
   - Contact Information: Provide ways for visitors to reach out to you, such as email and social media links.
   - Skills Section: Display your skills and technologies you are proficient in.
   - Customization: Easily customize the portfolio by modifying the HTML, CSS, and JavaScript files to add your own content and styling.
   - SEO Friendly: Optimize your portfolio for search engines to improve your online visibility.
            
  - Getting Started
    To get started with this portfolio, follow these steps:
            
    - Clone the Repository:
      -             git clone https://github.com/Mahanyasa/Mahanayasa-Personal-Portfolio-2.0.git
                
    - Customize the Content:
      Modify the HTML in index.html to update your personal information, project descriptions, and other content.
      Update the styles in style.css to match your preferred design and layout.
      If needed, make changes to the JavaScript in script.js to add interactivity or additional features.
                
    - Assets:
      Replace the images in the img/ directory with your own project screenshots and personal photos.
      Add any additional assets in the appropriate directories.
                
     - Testing:
       Open the index.html file in a web browser to test your portfolio locally and make any necessary adjustments.

     - Deployment:
       Deploy your customized portfolio to a web hosting service of your choice. Popular options include GitHub Pages, Netlify, or Vercel.
            
- Usage
  Once you have customized and deployed your portfolio, share the link to your portfolio on your resume, LinkedIn profile, and social media accounts to enhance your online presence.

- Customization
  You have full control over the customization of your portfolio. Modify the HTML, CSS, and JavaScript to tailor it to
  your specific needs and preferences. Add new sections, change the layout, or experiment with different styles to make it uniquely yours.
            
- Contributing
  If you have any suggestions, feature requests, or would like to report issues, please feel free to open an issue or submit a pull request. Contributions and improvements are welcome!
            
- License
  This portfolio template is available under the MIT License. You are free to use, modify, and distribute it as needed, while retaining the original license.
            
  Thank you for using this portfolio template. I hope it helps you showcase your work and talents effectively. If you have any questions or need assistance, don't hesitate to reach out!

# Here is the guide for Dark and Light theme for CSS
##CSS
## Dark Theme 
## Html
     background:#3B3B3B;
     color: #FAF9F6; 

## p
     color: #FAF9F6;

## Webkit
     background-color: #FFFDD0;
     border: 1px solid #696969;

### Track
     box-shadow: inset 0 0 5px grey;

### Thumb
     background: #E2DFD2;

### Thumb Hover
     background: #FFFFF0;

## Nav
### a
     color: #F9F9F9;

### a hover
     color: grey;
     text-decoration-color: #b5b5b5;

## menu-links
     background-color: #FFFFFF;

## menu-links a
     color: #000000;

## details-container
     background: white;
     border: 1px solid #3B3B3B;
     border-color: #3B3B3B;

### details-container hover
     box-shadow: 0 0 10px #F9F9F9;

## btn-color-1 btn-color-2
     border: 1px solid #FFFFFF;

### btn-color-1 btn-color-2 hover
     background:#A0A4A9;
     color: #272727;

### btn-color-1 hover
      background:#A198A5

### btn-color-2 hover
     border: #FFFFFF 0.1rem solid;

         .theme-dark {
            --grey: #3B3B3B;
            --font-color: #FAF9F6;
            --wb-bg: #FFFDD0;
            --clr-gry: grey;
            --wb-thb: #E2DFD2;
            --wb-thb-hvr: #FFFFF0;
            --nav-a: #F9F9F9;
            --a-hvr-td: #b5b5b5;
            --wht-drk: #FFFFFF;
            --blk-drk: #000000;
            --btn2-bg: #A0A4A9;
            --btn2-bg-hvr: #A198A5;
            --btn2-clr: #272727;
          }

# Light Theme 
## Html
    background:#FFFFFF;
    color: #3B3B3B; 

## p
    color: #3B3B3B;

## Webkit
    background-color: #3B3B3B;
    border: 1px solid #3B3B3B;

### Track
    box-shadow: inset 0 0 5px grey;

### Thumb
    background: #88DC3D;

### Thumb Hover
    background: #46923C;

## Nav
### a
    color: #3B3B3B;

### a hover
    color: grey;
    text-decoration-color: #FFFFFF;

## menu-links
    background-color: #000000;

## menu-links a
    color: #FFFFFF;

## details-container
    background: white;
    border: 1px solid #3B3B3B;
    border-color: #3B3B3B;

### details-container hover
    box-shadow: 0 0 10px #212121 ;

## btn-color-1 btn-color-2
    border: 1px solid #3B3B3B;

### btn-color-1 btn-color-2 hover
    background:#353535
    color: #88DC3D;

### btn-color-1 hover
    background:#000000

### btn-color-2 hover
    border: #FFFFFF 0.1rem solid;

    .theme-light {
      --grey: #3B3B3B;
      --font-color: #3B3B3B;
      --wb-bg: #3B3B3B;
      --clr-gry: grey;
      --wb-thb: #88DC3D;
      --wb-thb-hvr: #46923C;
      --nav-a: #3B3B3B;
      --a-hvr-td: #FFFFFF;
      --wht-drk: #000000;
      --blk-drk: #FFFFFF;
      --btn2-bg: #353535;
      --btn2-bg-hvr: #353535;
      --btn2-clr: #88DC3D;
    }
 
- Here is The HTML Code for Dark and Light Theme

  #Html Code
  -                         <div class="tglthm"><input type="checkbox" id="switch" class="checkbox" /><label for="switch" class="toggle" onclick="toggleTheme()"></label></div>
 
- Here is the JS Code for Dark and Light Theme
  # JS
                         function setTheme(themeName) {
                          localStorage.setItem('theme', themeName);
                          document.documentElement.className = themeName;
                        }
                        
                        // function to toggle between light and dark theme
                        function toggleTheme() {
                          if (localStorage.getItem('theme') === 'theme-dark') {
                              setTheme('theme-light');
                          } else {
                              setTheme('theme-dark');
                          }
                        }
                        
                        // Immediately invoked function to set the theme on initial load
                        (function () {
                          if (localStorage.getItem('theme') === 'theme-dark') {
                              setTheme('theme-dark');
                          } else {
                              setTheme('theme-light');
                          }
                        
                        })();
  Happy coding! 🚀
