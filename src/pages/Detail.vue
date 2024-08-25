<script>
 import axios from 'axios';
    export default{
        name:'Detail',
        data(){
            return{
                project: null,
            }
        },
        methods:{
            getProject(){
                const url= 'http://127.0.0.1:8000/api/project/' + this.$route.params.slug;
                const result = axios
                .get(url)
                .then((response)=> {
                    this.project=response.data.results;
                })
                .catch((error) =>console.log(error));
            },
        },
        created(){
            this.getProject();
        }
        };
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <h1 v-show="project.title">{{ project.title }}</h1>
                <p v-if="project.type">Type: {{ project.type.name }}</p>
                <p v-if="project.technologies.length">Technologies: <span v-for="tech in project.technologies" class="mx-2">{{ tech.name }}</span></p>
                <p>creation date: {{ project.creation_date }}</p>
                <p>size {{ project.size }}</p>
            </div>
        </div>
    </div>
</template>
