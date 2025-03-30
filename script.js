Vue.createApp({
    data() {
        return {
            newTask: "",
            newTaskOwner: "",
            tasks: JSON.parse(localStorage.getItem('tasks')) || [],
            owners: JSON.parse(localStorage.getItem('owners')) || [],
            filterStatus: '',
        };
    },
    computed: {
        filteredTasks() {
            let filtered = this.tasks;
            if (this.filterStatus) {
                filtered = this.tasks.filter(task => task.status === this.filterStatus);
            }
            return filtered;
        }
    },
    watch: {
        tasks: {
            handler(newTasks) {
                localStorage.setItem('tasks', JSON.stringify(newTasks));
            },
            deep: true
        },
        owners: {
            handler(newOwners) {
                localStorage.setItem('owners', JSON.stringify(newOwners));
            },
            deep: true
        }
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
        },
        setFilter(status) {
            this.filterStatus = status;
        }
    }
}).mount("#app");
