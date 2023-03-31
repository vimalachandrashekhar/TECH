#creating todo-list

with open('todo.txt', 'a') as f:
    pass
def read_todo_list():
    with open('todo.txt', 'r') as f:
        todo_list = f.read().splitlines()
    return todo_list
def add_todo_item(item):
    with open('todo.txt', 'a') as f:
        f.write(item + '\n')
def remove_todo_item(item):
    todo_list = read_todo_list()
    if item in todo_list:
        todo_list.remove(item)
        with open('todo.txt', 'w') as f:
            for todo_item in todo_list:
                f.write(todo_item + '\n')
    else:
        print("Item not found in to-do list.")
def update_todo_item(old_item, new_item):
    todo_list = read_todo_list()
    if old_item in todo_list:
        index = todo_list.index(old_item)
        todo_list[index] = new_item
        with open('todo.txt', 'w') as f:
            for todo_item in todo_list:
                f.write(todo_item + '\n')
    else:
        print("Item not found in to-do list.")

def display_todo_list():
    todo_list = read_todo_list()
    if len(todo_list) == 0:
        print("To-do list is empty.")
    else:
        print("To-do list:")
        for i, todo_item in enumerate(todo_list):
            print(f"{i+1}. {todo_item}")

def get_todo_item():
    item = input("Enter a to-do item: ")
    return item

def get_item_to_remove():
    item = input("Enter the item to remove: ")
    return item
def get_item_to_update():
    old_item = input("Enter the item to update: ")
    new_item = input("Enter the new item: ")
    return old_item, new_item


while True:
    
    print("Main menu:")
    print("1. Add item")
    print("2. Remove item")
    print("3. Update item")
    print("4. Display list")
    print("5. Quit")
    choice = input("Enter your choice: ")

    
    if choice == '1':
        item = get_todo_item()
        add_todo_item(item)
    elif choice == '2':
        item = get_item_to_remove()
        remove_todo_item(item)
    elif choice == '3':
        old_item, new_item = get_item_to_update()
        update_todo_item(old_item, new_item)
    elif choice == '4':
        display_todo_list()
    elif choice == '5':
        break
    else:
         print("Invalid choice. Please try again.")