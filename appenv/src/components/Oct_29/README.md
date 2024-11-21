# Practical Date : 2024/10/29

This practical demonstrates **dynamic themes** and **component composition** using React. It defines two components: `App` and `Calculator`. The `App` component demonstrates how to dynamically switch between light and dark themes using the `useState` hook. The `Calculator` component demonstrates how to create a reusable component that can be used to perform arithmetic operations.

The `Calculator` component is a reusable component that can be used to perform arithmetic operations. It defines a `Calculator` component that:
1. Displays a table with rows and columns for the arithmetic operations.
2. Allows the user to enter numeric values and perform the selected operation.
3. Displays the result of the operation.

Key Concepts:
1. **React State**: 
  - `useState` is used to manage the theme state.
  - The `setTheme` function updates the theme state.
2. **Event Handling**: 
  - The `onClick` event toggles the theme state.
  - The `onChange` event updates the `value` state, and the `onClick` event performs the selected operation.
3. **Component Composition**: 
  - The `Calculator` component is included in the `App` component to demonstrate reusability and modular design.
4. **Table-based Layout**: 
  The `Calculator` component uses a table to display the arithmetic operations and their results.

Techniques Used
- **Dynamic Themes**: Uses `useState` to toggle between light and dark themes by dynamically applying styles.
- **Adjustable Font Size**: Implements a slider (`<input type="range">`) to adjust font size dynamically using state management.
- **Theme Toggle**: A button toggles the theme state using the `setTheme` function, showcasing event-driven state updates.
- **Component Composition**: Includes the `Calculator` component to demonstrate reusability and modular design.
- **Controlled Components**: Input fields (`<input type="number">`) are managed using `useState`, allowing dynamic value updates and state synchronization.
- **Real-time Calculations**: Arithmetic operations (addition, subtraction, multiplication, division) are computed dynamically using JSX expressions.
- **Table-based Layout**: The results are presented in a structured table format to ensure clarity and readability.

Output:
![Output_Oct_29](../../../ScreenShots/Oct_29_1.png)
**Figure 1:**

![Output_Oct_29](../../../ScreenShots/Oct_29_2.png)
**Figure 2:**