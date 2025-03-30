Vue.createApp({
    data() {
        return {
            newTask: "",
            newTaskOwner: "",
            tasks: [],
            owners: []
        };
    },
    methods: {
        addTask() {
            //Make sure task input isnt empty
            if (this.newTask.trim()) {
                //Add the new task
                this.tasks.push({ text: this.newTask, owner: this.newTaskOwner, status: '' });

                //If a name is entered and not already in list, add it
                if (this.newTaskOwner && !this.owners.includes(this.newTaskOwner)) {
                    this.owners.push(this.newTaskOwner);
                }

                //Clear the input fields after adding the task
                this.newTask = "";
                this.newTaskOwner = "";
            }
        },
        //Function to remove task
        removeTask(index) {
            this.tasks.splice(index, 1);
        },
        
        //Update task status
        setStatus(index, status) {
            this.tasks[index].status = status;
        }
    }
}).mount("#app");
