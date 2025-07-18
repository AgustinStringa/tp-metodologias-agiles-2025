Feature: Play again!

  @play-again
  Scenario: Play again after losing the game
    Given word is "TEST"
    When I press the buttons for "ABCDFGH"
    Then the message should be "💀 ¡PERDISTE! 💀"
    When I press the play again button
    Then word display should look like "____"
    And the button for "A" should not look disabled
    And I should see "0" parts of hangman


  Scenario: Play again after winning the game
    Given word is "A"
    When I press the buttons for "A"
    Then the message should be "🎉 ¡GANASTE! 🎉"
    When I press the play again button
    Then word display should look like "_"
    And the button for "A" should not look disabled
    And I should see "0" parts of hangman
