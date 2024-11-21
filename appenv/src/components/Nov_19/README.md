# Practical Date : 2024/11/19

This practical demonstrates **parent-to-child and child-to-parent communication** in React using props and state. **ChildCom.js** file represents the child component (`ChildCom`) and demonstrates how a child can interact with a parent component by executing a function received via props.

Key Concepts:
1. **State Management**: The `useState` hook manages the state `childname` in the parent component (`App`).
2. **Parent-to-Child Communication**: The `recieveName` function is passed as a prop (`setfun`) to the child component (`ChildCom`).
3. **Child-to-Parent Communication**: The child component calls the parent-provided function (`setfun`) to send data (`"My name is Bob!"`) back to the parent.
4. **Props Handling**: The child receives the function `setfun` as a prop and calls it with a string (`"My name is Bob!"`).
5. **State Updation in Parent**: By invoking `setfun`, the child triggers a state update in the parent component.

Features:
- The parent component (`App`) initializes a state variable `childname` with a default value.
- A child component (`ChildCom`) executes the `setfun` function provided by the parent to update the parent's state.
- The parent component displays the updated state, showcasing communication between the child and the parent.

Features in `ChildCom` component:
- Displays a message, "Hello React I'm child."
- Triggers the parent's `recieveName` function to update the parent's state.

Techniques Used:
- **Props**: Used to pass the `setfun` function from parent to child.
- **Callbacks**: The child component calls the parent's function to modify the parent's state.

Output:
![Output_Nov_19](../../../ScreenShots/Nov_19.png)
**Figure 1:**

