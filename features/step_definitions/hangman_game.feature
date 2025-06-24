Feature: Playing Hangman
  Try some letters!

Scenario Outline: Lets win
    Given word is "<word>"
    When I try "<firstLetter>", "<secondLetter>", "<thirdLetter>", "<fourthLetter>" 
    Then I should see "<answer>"

  Examples:
    | word | firstLetter | secondLetter | thirdLetter | fourthLetter | answer |
    | AUTO | A           | U            | T           | O            | WON    |
    | PILA | P           | I            | L           | A            | WON    |
    | LOTE | L           | O            | T           | E            | WON    |
    | CERO | C           | E            | R           | O            | WON    |