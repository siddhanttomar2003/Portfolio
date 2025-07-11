import ProjectSlider from "./ProjectSlider";

const ProjectPage = () => (
    <section style={{ backgroundColor: "#0b0b0c", padding: "60px 0" }}>
        <h1 style={{
            textAlign: "center",
            color: "white",
            fontSize: "4rem",
            marginBottom: "40px"
        }}>
            Projects
        </h1>
        <ProjectSlider />
    </section>
);

export default ProjectPage;
