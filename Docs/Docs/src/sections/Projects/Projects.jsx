import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import Zentech from '../../assets/zentech.jpeg'
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projetos</h1>
      <div className={styles.projectsContainer}>
  
        <ProjectCard
          src={freshBurger}
          link="https://github.com/All-Tech-DSM/API-2.git"
          h3="WebScraping"
         
        />
        <ProjectCard
          src={hipsster}
          link="https://github.com/BrunoHenriique/BrazilianTech-.git"
          h3="Gestão de Serviços"
         
         
        />
        <ProjectCard
          src={fitLift}
          link="https://github.com/BananaaScript/SGA.git"
          h3="Gestão de Ativos"
        />

        <ProjectCard
          src={Zentech}
          link="https://github.com/Viniciusfernandes2/Zen-Tech-Documentacao.git"
          h3="Gestão de Dados Meteorológicos"
        />



      </div>
    </section>
  );
}

export default Projects;
