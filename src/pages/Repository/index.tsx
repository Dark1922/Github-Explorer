import React, {useEffect, useState} from 'react';
import {useRouteMatch, Link} from 'react-router-dom';
import logoImg from '../../assets/logo.svg';
import {Header , RepositoryInfo, Issues } from './style';
import {FiChevronLeft, FiChevronsRight} from 'react-icons/fi';
import api from '../../services/api';

interface RepositoryParams  {
  repository:  string;
}

interface Repositorye {
  full_name: string;
  description:string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count:number;
  owner: {
    login:string;
    avatar_url: string;
  };

}
interface Issue { //esses dados são todos da api
  id: number;
  title: string;
  html_url: string;
  user: {
   login: string;
  }


}

const Repository: React.FC =  () => {
   const [repository, setRepository] = useState<Repositorye | null>(null);
   const [issues, setIssues] = useState<Issue[]>([]);

  const  {params} = useRouteMatch<RepositoryParams>();

  useEffect(() => {
   api.get(`repos/${params.repository}`).then((response) => {
     setRepository(response.data)
   });


    api.get(`repos/${params.repository}/issues`).then((response) => {
      setIssues(response.data)
    });
  }, [params.repository])


   return (
     <>
   <Header>

     <img src={logoImg} alt="Github Explorer "/>
      <Link to="/">
        <FiChevronLeft size={16}/>
        Voltar
      </Link>
     </Header>

     {repository && (
      <RepositoryInfo>
       <header>
           <img src={repository.owner.avatar_url} alt={repository.owner.login}/>
           <div>
             <strong>{repository.full_name}</strong>
             <p>{repository.description}</p>
           </div>
       </header>
       <ul>
          <li>
            <strong>{repository.stargazers_count}</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>{repository.forks_count}</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>{repository.open_issues_count}</strong>
            <span>Issues abertas</span>
          </li>
       </ul>
     </RepositoryInfo>
     )}

       <Issues>
       {issues.map(issue => (
         <a key={issue.id}     href={issue.html_url}>



         <div>

         <strong>{issue.title}</strong>

         <p>{issue.user.login}</p>
       </div>

       <FiChevronsRight size={20}/>

       </a>
       ))}
       </Issues>
     </>
);
};

export default Repository;
