import { useState } from "react";
import PropTypes from "prop-types";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styles from "./accordion.module.css";

export default function ControlledAccordions({ title, varietals }) {
	const [expanded, setExpanded] = useState(false);

	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};

	return (
		<>
			<section className={styles.accordion_wrapper}>
				<h2 className={styles.title}>{title}</h2>
				{varietals?.map((varietal, index) => (
					<Accordion
						key={index}
						expanded={expanded === `panel${index}`}
						onChange={handleChange(`panel${index}`)}
						className={styles.accordion}>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls={`panel${index}bh-content`}
							id={`panel${index}bh-header`}
							className={styles.accordion_summary}>
							<Typography className={styles.name}>
								{varietal.name}
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography className={styles.description}>
								{varietal.description}
							</Typography>
						</AccordionDetails>
					</Accordion>
				))}
			</section>
		</>
	);
}

ControlledAccordions.propTypes = {
	title: PropTypes.string,
	varietals: PropTypes.arrayOf(PropTypes.object),
};
