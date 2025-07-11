Feature: Playing Hangman UI
  Try some letters!

@winning
Scenario Outline: Lets win
    Given word with UI is "<word>"
    When I press the buttons for "<letters>" 
    Then the message should be "<answer>"

    Examples:
    | word | letters  | answer |
    | auto | AUTO     | WON    |
    | pila | PILA     | WON    |
    | lote | LOTE     | WON    |
    | cero | CERO     | WON    |


@losing
Scenario Outline: Lets lose
    Given word with UI is "<word>"
    When I press the buttons for "<letters>" 
    Then the message should be "<answer>"

  Examples:
    | word | letters   | answer |
    | auto | ZPWKLMN   | LOST   |
    | pila | WRYTFOQ   | LOST   |
    | lote | AUIFJWÑ   | LOST   |
    | cero | AIUSPLJ   | LOST   |


@winning
Scenario Outline: Win is not so easy
    Given word with UI is "<word>"
    When I press the buttons for "<letters>" 
    Then the message should be "<answer>"

  Examples:
    | word     | letters        | answer |
    | planeta  | PAZXYNLTE      | WON    |
    | carrito  | CIOUVWKRTA     | WON    |
    | escuela  | SEZUXLBCHA     | WON    |
    | relojero | RQWLOZJE       | WON    |


@losing
Scenario Outline: Try, fail, try again... lose
    Given word with UI is "<word>"
    When I press the buttons for "<letters>" 
    Then the message should be "<answer>"

  Examples:
    | word     | letters         | answer |
    | camino   | CAMXYZULET      | LOST   |
    | naranja  | NARZXYWBTS      | LOST   |
    | pelota   | PEXYLOZKQWÑ     | LOST   |
    | guitarra | GITZXRMQUKWF    | LOST   |

