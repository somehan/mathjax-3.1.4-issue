# Context

Code sample for recreating the issue in [https://github.com/mathjax/MathJax/issues/2683]

## How to see the code work with mathjax 3.1.2

1. Clone the repository
1. `npm i`
1. `npm run start`

Console output should end with some HTML and "Done."

## How to see the code fail with mathjax 3.1.4
 1. Now upgrade mathjax to 3.1.4 in `package.json`
 1. `npm i`
 1. `npm run start`
 
 Console shows an error `TypeError: Cannot set property 'init' of undefined`
