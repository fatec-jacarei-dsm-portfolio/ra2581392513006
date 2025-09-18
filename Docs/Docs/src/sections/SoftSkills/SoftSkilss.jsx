import styles from "./SkillsStyles.module.css";
import checkMarkIconDark from "../../assets/checkmark-dark.svg";
import checkMarkIconLight from "../../assets/checkmark-light.svg";
import SkillList from "../../common/SkillList";
import { useTheme } from "../../common/ThemeContext";

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon =
    theme === "light" ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Soft Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Comunicação" />
        <SkillList src={checkMarkIcon} skill="Colaboração" />
        <SkillList src={checkMarkIcon} skill="Resolução de Problemas" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Resiliência" />
        <SkillList src={checkMarkIcon} skill="Gestão de Tempo" />
        <SkillList src={checkMarkIcon} skill="Flexibilidade" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Trabalho em Equipe" />
        <SkillList src={checkMarkIcon} skill="Pensamento Critico" />
      </div>
    </section>
  );
}

export default Skills;
