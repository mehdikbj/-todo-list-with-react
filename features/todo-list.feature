Feature: Todo-list
  Scenario: Add Item to todo-list
    When I go to the 'home' page
    Then I should be on a page titled 'To-Do List'
    And I should see 'ADD ITEM IN THE LIST'
    And I fill 'Description' with 'New item todo list'
    And I click on element with id 'button-form'
    Then I should see 'New item todo list'
    And I fill 'Description' with 'Second item todo list'
    And I click on element with id 'button-form'
    Then I should see 'Second item todo list'
    And I fill 'Description' with 'Third item todo list'
    And I click on element with id 'button-form'
    Then I should see 'Third item todo list'

  Scenario: Delete Item from todo-list
    When I go to the 'home' page
    Then I should be on a page titled 'To-Do List'
    And I should see 'ADD ITEM IN THE LIST'
    And I fill 'Description' with 'First item todo list'
    And I click on element with id 'button-form'
    Then I should see 'First item todo list'
    And I fill 'Description' with 'Second item todo list'
    And I click on element with id 'button-form'
    Then I should see 'Second item todo list'
    And I fill 'Description' with 'Third item todo list'
    And I click on element with id 'button-form'
    Then I should see 'Third item todo list'
    When I click on element with id 'delete1'
    Then I should not see 'First item todo list'
    Then I should see 'Second item todo list'
    Then I should see 'Third item todo list'


