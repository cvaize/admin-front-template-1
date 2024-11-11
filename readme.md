# Shop admin v1 template

Only HTML+CSS

Mode: Light/Dark

Icons for menu:
https://marella.me/material-design-icons/demo/font/#round

Images:
![1](images/1.png "1")
![2](images/2.png "2")
![3](images/3.png "3")
![4](images/4.png "4")

Css variables:
```css
:root {
    --shop-app-color: 59, 67, 81;
    --shop-app-background-color: 255, 255, 255;
    --shop-app-backdrop-color: 0, 0, 0;
    --shop-app-light-background-color: 225, 225, 225;
    --shop-app-success-color: 21, 115, 71;
    --shop-app-danger-color: 220, 53, 69;
}

.shop-dark-mode-checkbox:checked ~ * {
    --shop-app-color: 196, 187, 173;
    --shop-app-background-color: 0, 0, 0;
    --shop-app-backdrop-color: 255, 255, 255;
    --shop-app-light-background-color: 29, 29, 29;
    --shop-app-success-color: 0, 255, 136;
    --shop-app-danger-color: 255, 0, 24;
}
```