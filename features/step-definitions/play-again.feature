Feature: Play again!

  @play-again
  Scenario: Play again
    Given word is "<word>"
    When I press the buttons for "<letters>"
    Then the message should be "<message>"
    When I press the play again button
    Then word display should look like "<display>"
    And the buttons for "<letters>" should not look disabled
    And I should see "0" parts of hangman

 Examples:
    | word      | letters    | message           | display   |
    | CAMIONETA | ZXULQWF    | 💀 ¡PERDISTE! 💀 | _________ |
    | COCODRILO | AFLCODRI   | 🎉 ¡GANASTE! 🎉  | _________ |
    | ARBOL     | AEIUFJKLP  | 💀 ¡PERDISTE! 💀 | _____     |
    | PILETA    | ATIPLJE    | 🎉 ¡GANASTE! 🎉  | ______    |
