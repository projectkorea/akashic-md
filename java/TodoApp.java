import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class TodoApp {
    private List<TodoItem> todoList;
    private int idCounter;

    public TodoApp() {
        this.todoList = new ArrayList<>();
        this.idCounter = 1;
    }

    public void createTodoItem(String task) {
        TodoItem newItem = new TodoItem(idCounter++, task);
        todoList.add(newItem);
        System.out.println("Created: " + newItem);
    }

    public void readTodoItems() {
        if (todoList.isEmpty()) {
            System.out.println("No ToDo items found.");
        } else {
            todoList.forEach(System.out::println);
        }
    }

    public void updateTodoItem(int id, String newTask) {
        for (TodoItem item : todoList) {
            if (item.getId() == id) {
                item.setTask(newTask);
                System.out.println("Updated: " + item);
                return;
            }
        }
        System.out.println("ToDo item not found with id: " + id);
    }

    public void deleteTodoItem(int id) {
        for (int i = 0; i < todoList.size(); i++) {
            if (todoList.get(i).getId() == id) {
                System.out.println("Deleted: " + todoList.remove(i));
                return;
            }
        }
        System.out.println("ToDo item not found with id: " + id);
    }

    public void markAsCompleted(int id) {
        for (TodoItem item : todoList) {
            if (item.getId() == id) {
                item.setCompleted(true);
                System.out.println("Completed: " + item);
                return;
            }
        }
        System.out.println("ToDo item not found with id: " + id);
    }

    public static void main(String[] args) {
        TodoApp app = new TodoApp();
        Scanner scanner = new Scanner(System.in);

        while (true) {
            System.out.println("1. Create ToDo Item");
            System.out.println("2. Read ToDo Items");
            System.out.println("3. Update ToDo Item");
            System.out.println("4. Delete ToDo Item");
            System.out.println("5. Mark As Completed");
            System.out.println("6. Exit");
            System.out.print("Enter your choice: ");
            int choice = scanner.nextInt();
            scanner.nextLine(); // consume newline

            switch (choice) {
                case 1:
                    System.out.print("Enter task: ");
                    String task = scanner.nextLine();
                    app.createTodoItem(task);
                    break;
                case 2:
                    app.readTodoItems();
                    break;
                case 3:
                    System.out.print("Enter id to update: ");
                    int idToUpdate = scanner.nextInt();
                    scanner.nextLine(); // consume newline
                    System.out.print("Enter new task: ");
                    String newTask = scanner.nextLine();
                    app.updateTodoItem(idToUpdate, newTask);
                    break;
                case 4:
                    System.out.print("Enter id to delete: ");
                    int idToDelete = scanner.nextInt();
                    app.deleteTodoItem(idToDelete);
                    break;
                case 5:
                    System.out.print("Enter id to mark as completed: ");
                    int idToComplete = scanner.nextInt();
                    app.markAsCompleted(idToComplete);
                    break;
                case 6:
                    System.out.println("Exiting...");
                    scanner.close();
                    return;
                default:
                    System.out.println("Invalid choice. Please try again.");
            }
        }
    }
}
