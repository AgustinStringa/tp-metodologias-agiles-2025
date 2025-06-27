Feature: Playing Hangman
  Try some letters!

Scenario Outline: Lets win
    Given word is "<word>"
    When I try "<firstLetter>", "<secondLetter>", "<thirdLetter>", "<fourthLetter>" 
    Then I should see "<answer>"

  Examples:
    | word | firstLetter | secondLetter | thirdLetter | fourthLetter | answer |
    | auto | A           | U            | T           | O            | WON    |
    | pila | P           | I            | L           | A            | WON    |
    | lote | L           | O            | T           | E            | WON    |
    | cero | C           | E            | R           | O            | WON    |