Feature: Retry after game ends
  Players can retry the game after losing or winning.

  @retry
  Scenario: Retry after losing the game
    Given word with UI is "TEST"
    When I press the buttons for "ABCDFGH"
    Then the message should be "💀 ¡PERDISTE! 💀"
    When I press the retry button
    Then word display should look like "____"
    And the button for "A" should not look disabled
    And I should see "0" parts of hangman


  
  Scenario: Retry after winning the game
  Given word with UI is "A"
  When I press the buttons for "A"
  Then the message should be "🎉 ¡GANASTE! 🎉"
  When I press the retry button
  Then word display should look like "_"
  And the button for "A" should not look disabled
  And I should see "0" parts of hangman

