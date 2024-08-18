<script>
    import axios from 'axios';
    import Project from './Project.vue';
    export default{
        name:'Main',
        components: {
            Project,
        },
        data() {
            return{
                title: 'Projects',
                projects:[],
                postAPIpage: 1,            }
        },
        methods:{
            getProjects(){
                const result = axios
                .get('http://127.0.0.1:8000/api/project', {
                    params:{
                        page:this.postAPIpage
                    }
                })
                .then((response)=> {
                    console.log(response);
                    if(response.data.status && response.data.results.data.length){
                        console.log(response.data.results.data);
                        this.projects = response.data.results.data;
                    } else {
                        console.log('qualcosa è andato storto')
                    }
                })
                .catch((error) =>console.log(error));
            },
            changePage(page){
                if(page < 1)
                    page=1
                else if(page>2)
                    page=2;
                this.postAPIpage=page;
                this.getProjects();
            }
        },
        created(){
            this.getProjects();
        }
        };
</script>

<template>
    <div class="container py-5">
        <div class="row">
            <Project v-for="project in projects"
            :project="project" />
            <nav aria-label="Page navigation example">
            <ul class="pagination">
                <li class="page-item"><a class="page-link" href="#" @click="changePage(postAPIpage-1)"><<</a></li>
                <li class="page-item"><a class="page-link" href="#" @click="changePage(1)">1</a></li>
                <li class="page-item"><a class="page-link" href="#" @click="changePage(2)">2</a></li>
                <li class="page-item"><a class="page-link" href="#" @click="changePage(postAPIpage+1)">>></a></li>
            </ul>
            </nav>
        </div>
    </div>
</template>