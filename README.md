# Pangrams

According to Wikipedia, a pangram is a sentence that uses every letter of the alphabet at least once.  An example of a pangram is `the quick brown fox jumps over the lazy dog`.  The purpose of the project is to investigate if the sentences are pangrams using Form Inputs.

# UX

The form consists of a textarea with two buttons - Submit and Reset.

## User Stories

As a user, if I do not enter anything in the textarea, I expect the message 

`Invalid Input.  Text cannot be empty.`

As a user, if I enter something in the textarea and click on Submit, I expect to see what I have entered (before converting to lower case).

As a user, if I enter something in the textarea and click on Submit, I expect to see 'This text is a pangram' or 'This text is not a pangram'.

As a user, I expect a placeholder on the textarea.

As a user, if I submit the text 'The quick brown fox jumps over the lazy dog', I expect this text to be a pangram.

As a user, if I submit the text 'ABCDEFGHIJKLMNOPQRSTUVWXYZ;, I expect this text to be a pangram.

As a user, if I submit the text 'torch', I expect this text is not a pangram.

## Information Architecture

The function isPangram takes in the text.  The text is converted to lower case. The letter (e.g. a) is looped over the alphabet (abcdefghijklmnopqrstuvwxyz).  If the text does not include the letter (e.g. torch does not include the letter a), the function returns false.  Assuming that the text includes every letter in the alphabet, the function returns true.

Examples

    The quick brown fox jumps over the lazy dog returns true.
    torch returns false.

If the function returns true, it will display `This text is a pangram`, otherwise it will display `This text is not a pangram`.

## Features

This project checks for invalid input.  If the submitted text is empty, a message `Invalid Input.  Text cannot be empty.` appears.  Assuming that the input is valid, I expect the text entered to be displayed (before converting to lower case).  Displays the message `This text is a pangram` or `This text is not a pangram`.

## Technologies

This project uses Bootstrap 5.0.1, HTML5, CSS3, JavaScript and Google Fonts.

## Testing

Ensure that all user stories have been met.  For example, if I submit empty text, I expect the invalid input message to be displayed.

## Deployment

Deployed on [GitHub Pages](https://derektypist.github.io/pangrams) at the main branch.

## Credits

### Content

Written by me.

### Acknowledgements

- [Bootstrap](https://getbootstrap.com)
- [Geeks for Geeks](https://www.geeksforgeeks.org)
- [Wikipedia](https://en.wikipedia.org/wiki/Pangram)