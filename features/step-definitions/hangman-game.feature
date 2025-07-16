Feature: Playing Hangman
  Try some letters!


@winning
Scenario Outline: Lets win
    Given word is "<word>"
    When I try "<letters>" 
    Then I should see "<answer>"

  Examples:
    | word | letters  | answer |
    | AUTO | AUTO     | WON    |
    | PILA | PILA     | WON    |
    | LOTE | LOTE     | WON    |
    | CERO | CERO     | WON    |


@losing
Scenario Outline: Lets lose
    Given word is "<word>"
    When I try "<letters>"
    Then I should see "<answer>"

  Examples:
    | word | letters   | answer |
    | AUTO | ZPWKLMN   | LOST   |
    | PILA | WRYTFOQ   | LOST   |
    | LOTE | AUIFJWÑ   | LOST   |
    | CERO | AIUSPLJ   | LOST   |


@winning
Scenario Outline: Win is not so easy
    Given word is "<word>"
    When I try "<letters>"
    Then I should see "<answer>"

  Examples:
    | word     | letters        | answer |
    | PLANETA  | PAZXYNLTE      | WON    |
    | CARRITO  | CIOUVWKRTA     | WON    |
    | ESCUELA  | SEZUXLBCHA     | WON    |
    | RELOJERO | RQWLOZJE       | WON    |


@losing
Scenario Outline: Try, fail, try again... lose
    Given word is "<word>"
    When I try "<letters>"
    Then I should see "<answer>"

  Examples:
    | word     | letters         | answer |
    | CAMINO   | CAMXYZULET      | LOST   |
    | NARANJA  | NARZXYWBTS      | LOST   |
    | PELOTA   | PEXYLOZKQWÑ     | LOST   |
    | GUITARRA | GITZXRMQUKWF    | LOST   |
