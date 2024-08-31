<script>
    import axios from 'axios';
    import Project from '../components/Project.vue';
    export default{
        name:'Main',
        components: {
            Project,
        },
        data() {
            return{
                title: 'Projects',
                projects:[],
                postAPIpage: 1,
                lastPage: 0,
                title:""
                }
        },
        methods:{
            getProjects(){
                const result = axios
                .get('http://127.0.0.1:8000/api/project', {
                    params:{
                        page:this.postAPIpage,
                    }
                })
                .then((response)=> {
                    if(response.data.status && response.data.results.data.length){
                        this.projects = response.data.results.data;
                        this.lastPage = response.data.results.last_page;
                    } else {
                        console.log('qualcosa è andato storto')
                    }
                })
                .catch((error) =>console.log(error));
            },
            filter(){
                const result = axios
                .get('http://127.0.0.1:8000/api/project', {
                    params:{
                        title:this.title,
                    }
                })
                .then((response)=> {
                    console.log(this.title);
                    console.log(response);
                    this.projects = response.data.results.data;
                  
                })
                .catch((error) =>console.log(error));
            },
            changePage(page){
                if(page < 1)
                    page=1;
                else if(page>this.lastPage)
                    page=this.lastPage;
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
            <div class="col-12">
                <div class="mb-3">
                    <label class="form-label">Title</label>
                    <input type="text" class="form-control w-25" v-model="title">
                </div>
                <button class="btn btn-primary" @click="filter()">Cerca</button>
            </div>
            <Project v-for="project in projects"
                :project="project"
                :title="project.title"
                :type="project.type"
                :size="project.size"
                :slug="project.slug" />
            <nav aria-label="Page navigation example">
            <ul class="pagination">
                <li class="page-item"><a class="page-link" href="#" @click="changePage(postAPIpage-1)"><<</a></li>
                <li class="page-item" v-for="n in lastPage"><a class="page-link" href="#" @click="changePage(n)">{{ n }}</a></li>
                <li class="page-item"><a class="page-link" href="#" @click="changePage(postAPIpage+1)">>></a></li>
            </ul>
            </nav>
        </div>
    </div>
</template>