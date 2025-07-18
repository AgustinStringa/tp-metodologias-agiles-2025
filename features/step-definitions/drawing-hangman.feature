Feature: Draw hangman!

@draw_hangman
Scenario Outline: Watch hangman's arms and legs
    Given word is "<word>"
    When I press the buttons for "<letters>"
    Then I should see "<count>" parts of hangman

    Examples:
    | word      | letters   | count |
    | ABURRIDO  | AWEFO     | 3     | 
    | GUITARRA  | PGUL      | 2     |
    | FELICIDAD | OS        | 2     |
    | TRANQUILO | TRANQUILO | 0     |
    | GORDO     | WUIPNMA   | 7     |
