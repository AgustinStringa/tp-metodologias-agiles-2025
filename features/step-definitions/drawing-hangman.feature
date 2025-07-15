Feature: Draw hangman!

@draw_hangman
Scenario Outline: Watch hangman's arms and legs
    Given word with UI is "<word>"
    When I press the buttons for "<letters>"
    Then I should see "<count>" parts of hangman

    Examples:
    | word      | letters   | count |
    | aburrido  | AWEFO     | 3     | 
    | guitarra  | PGUL      | 2     |
    | felicidad | OS        | 2     |
    | tranquilo | TRANQUILO | 0     |
    | gordo     | WUIPNMA   | 7     |