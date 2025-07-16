Feature: Playing Hangman UI
  Try some letters!

@winning
Scenario Outline: Lets win
    Given word with UI is "<word>"
    When I press the buttons for "<letters>" 
    Then the message should be "<answer>"

    Examples:
    | word | letters  | answer           |
    | AUTO | AUTO     | 🎉 ¡GANASTE! 🎉 |
    | PILA | PILA     | 🎉 ¡GANASTE! 🎉 |
    | LOTE | LOTE     | 🎉 ¡GANASTE! 🎉 |
    | CERO | CERO     | 🎉 ¡GANASTE! 🎉 |


@losing
Scenario Outline: Lets lose
    Given word with UI is "<word>"
    When I press the buttons for "<letters>" 
    Then the message should be "<answer>"

  Examples:
    | word | letters   | answer            |
    | AUTO | ZPWKLMN   | 💀 ¡PERDISTE! 💀 |
    | PILA | WRYTFOQ   | 💀 ¡PERDISTE! 💀 |
    | LOTE | AUIFJWÑ   | 💀 ¡PERDISTE! 💀 |
    | CERO | AIUSPLJ   | 💀 ¡PERDISTE! 💀 |


@winning
Scenario Outline: Win is not so easy
    Given word with UI is "<word>"
    When I press the buttons for "<letters>" 
    Then the message should be "<answer>"

  Examples:
    | word     | letters        | answer           |
    | PLANETA  | PAZXYNLTE      | 🎉 ¡GANASTE! 🎉 |
    | CARRITO  | CIOUVWKRTA     | 🎉 ¡GANASTE! 🎉 |
    | ESCUELA  | SEZUXLBCHA     | 🎉 ¡GANASTE! 🎉 |
    | RELOJERO | RQWLOZJE       | 🎉 ¡GANASTE! 🎉 |


@losing
Scenario Outline: Try, fail, try again... lose
    Given word with UI is "<word>"
    When I press the buttons for "<letters>" 
    Then the message should be "<answer>"

  Examples:
    | word     | letters         | answer            |
    | CAMINO   | CAMXYZULET      | 💀 ¡PERDISTE! 💀 |
    | NARANJA  | NARZXYWBTS      | 💀 ¡PERDISTE! 💀 |
    | PELOTA   | PEXYLOZKQWÑ     | 💀 ¡PERDISTE! 💀 |
    | GUITARRA | GITZXRMQUKWF    | 💀 ¡PERDISTE! 💀 |

