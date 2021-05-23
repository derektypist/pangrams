# Pangrams

According to Wikipedia, a pangram is a sentence that uses every letter of the alphabet at least once.  An example of a pangram is "the quick brown fox jumps over the lazy dog".  The purpose of the project is to investigate if the sentences are pangrams using Form Inputs.

# UX

## User Stories

As a user, if I do not enter anything in the textarea, I expect the message notifying me of an invalid input.

As a user, if I enter something in the textarea and click on Submit, I expect to see what I have entered (before converting to lower case).

As a user, if I enter something in the textarea and click on Submit, I expect to see 'This text is a pangram' or 'This text is not a pangram'.

As a user, I expect a placeholder on the textarea.

As a user, if I submit the text 'The quick brown fox jumps over the lazy dog', I expect this text to be a pangram.

As a user, if I submit the text 'torch', I expect this text is not a pangram.

## Information Architecture

The function takes in the text.  The text is converted to lower case.  The function returns true or false.

Examples

    The quick brown fox jumps over the lazy dog returns true.
    torch returns false.

