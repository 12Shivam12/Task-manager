import Todo from "../models/todos.model.js";

export const getAllTodos = async (req, res) => {

    try {
        const todos = await Todo.find({ userId: req.userId });

        if (todos.length < 1) {
            return res.status(404).json({ message: "No todos found for this user" });
        }

        return res.status(200).json({ message: "Todos fetched successfully", todos });
    } catch (error) {
        console.log('Error fetching todos', error);
        return res.status(500).json({ message: "Inernal server error" });
    }

}

export const createNewTodo = async (req, res) => {
    const { title, description, isCompleted } = req.body;

    if (!title || !description) {
        return res.status(400).json({ message: "All fields are required" });
    }

    try {
        const newTodo = new Todo({
            title,
            description,
            isCompleted,
            userId: req.userId
        })

        const savedTodo = await newTodo.save();
        return res.status(201).json({ message: "new todo created successfully", todo: savedTodo });
    } catch (error) {
        console.log('error creating todo', error);
        return res.status(500).json({ message: "Internal server error" })
    }
}


export const deleteTodo = async (req, res) => {
    const { id } = req.params; 

    try {
        const todo = await Todo.findOne({ _id: id, userId: req.userId });

        if (!todo) {
            return res.status(404).json({ message: "Todo not found or you're not authorized to delete this todo" });
        }

        await Todo.deleteOne({ _id: id });
       
        return res.status(200).json({ message: "Todo deleted successfully"});

    } catch (error) {
        console.error('Error deleting todo:', error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

export const editTodo = async (req, res) => {
    const { id } = req.params; 
    const { title, description, isCompleted } = req.body; 

    try {
        const todo = await Todo.findOne({ _id: id, userId: req.userId });

        if (!todo) {
            return res.status(404).json({ message: "Todo not found or you're not authorized to edit this todo" });
        }

        if (title) todo.title = title;
        if (description) todo.description = description;
        if (typeof isCompleted === 'boolean') todo.isCompleted = isCompleted;

        const updatedTodo = await todo.save(); 

        return res.status(200).json({ message: "Todo updated successfully", todo: updatedTodo });

    } catch (error) {
        console.error('Error editing todo:', error);
        return res.status(500).json({ message: "Internal server error" });
    }
};


