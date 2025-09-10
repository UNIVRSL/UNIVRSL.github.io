// 2023 NEC Code Book Learning Game Data
// Contains questions and answers for all game modes

const gameData = {
    chapters: {
        title: "Chapter Organization",
        questions: [
            {
                question: "Which chapter covers General Requirements for Electrical Installations?",
                options: ["Chapter 1", "Chapter 2", "Chapter 3", "Chapter 4"],
                correct: 0,
                explanation: "Chapter 1 covers General Requirements for Electrical Installations."
            },
            {
                question: "Which chapter contains Wiring and Protection requirements?",
                options: ["Chapter 1", "Chapter 2", "Chapter 3", "Chapter 4"],
                correct: 1,
                explanation: "Chapter 2 covers Wiring and Protection requirements."
            },
            {
                question: "Which chapter covers Wiring Methods and Materials?",
                options: ["Chapter 2", "Chapter 3", "Chapter 4", "Chapter 5"],
                correct: 1,
                explanation: "Chapter 3 covers Wiring Methods and Materials."
            },
            {
                question: "Which chapter contains Equipment for General Use?",
                options: ["Chapter 3", "Chapter 4", "Chapter 5", "Chapter 6"],
                correct: 1,
                explanation: "Chapter 4 covers Equipment for General Use."
            },
            {
                question: "Which chapter covers Special Occupancies?",
                options: ["Chapter 4", "Chapter 5", "Chapter 6", "Chapter 7"],
                correct: 1,
                explanation: "Chapter 5 covers Special Occupancies."
            },
            {
                question: "Which chapter contains Special Equipment?",
                options: ["Chapter 5", "Chapter 6", "Chapter 7", "Chapter 8"],
                correct: 1,
                explanation: "Chapter 6 covers Special Equipment."
            },
            {
                question: "Which chapter covers Special Conditions?",
                options: ["Chapter 6", "Chapter 7", "Chapter 8", "Chapter 9"],
                correct: 1,
                explanation: "Chapter 7 covers Special Conditions."
            },
            {
                question: "Which chapter contains Communications Systems?",
                options: ["Chapter 7", "Chapter 8", "Chapter 9", "Chapter 10"],
                correct: 1,
                explanation: "Chapter 8 covers Communications Systems."
            },
            {
                question: "Which chapter covers Tables?",
                options: ["Chapter 8", "Chapter 9", "Chapter 10", "Chapter 11"],
                correct: 1,
                explanation: "Chapter 9 contains Tables."
            },
            {
                question: "Which chapter covers Annexes and Appendices?",
                options: ["Chapter 9", "Annexes", "Appendices", "Informational Notes"],
                correct: 1,
                explanation: "Annexes and Appendices are separate sections following Chapter 9."
            }
        ]
    },

    articles: {
        title: "Article Numbers & Topics",
        questions: [
            {
                question: "What does Article 100 define?",
                options: ["Definitions", "General Requirements", "Grounding", "Services"],
                correct: 0,
                explanation: "Article 100 contains Definitions used throughout the NEC."
            },
            {
                question: "Which article covers Grounding and Bonding?",
                options: ["Article 200", "Article 250", "Article 300", "Article 400"],
                correct: 1,
                explanation: "Article 250 covers Grounding and Bonding requirements."
            },
            {
                question: "What does Article 310 cover?",
                options: ["Conductors", "Raceways", "Boxes", "Cabling"],
                correct: 0,
                explanation: "Article 310 covers Conductors for General Wiring."
            },
            {
                question: "Which article covers Services?",
                options: ["Article 200", "Article 230", "Article 240", "Article 250"],
                correct: 1,
                explanation: "Article 230 covers Services (electrical service entrance requirements)."
            },
            {
                question: "What does Article 404 cover?",
                options: ["Switches", "Receptacles", "Lighting", "Motors"],
                correct: 0,
                explanation: "Article 404 covers Switches."
            },
            {
                question: "Which article covers Receptacles?",
                options: ["Article 400", "Article 406", "Article 410", "Article 430"],
                correct: 1,
                explanation: "Article 406 covers Receptacles."
            },
            {
                question: "What does Article 430 cover?",
                options: ["Transformers", "Motors", "Generators", "Capacitors"],
                correct: 1,
                explanation: "Article 430 covers Motors, Motor Circuits, and Controllers."
            },
            {
                question: "Which article covers Lighting?",
                options: ["Article 400", "Article 408", "Article 410", "Article 430"],
                correct: 2,
                explanation: "Article 410 covers Lighting."
            },
            {
                question: "What does Article 700 cover?",
                options: ["Emergency Systems", "Fire Alarm", "Communications", "Special Conditions"],
                correct: 0,
                explanation: "Article 700 covers Emergency Systems."
            },
            {
                question: "Which article covers Fire Alarm Systems?",
                options: ["Article 700", "Article 720", "Article 760", "Article 800"],
                correct: 2,
                explanation: "Article 760 covers Fire Alarm Systems."
            }
        ]
    },

    sections: {
        title: "Section Numbering",
        questions: [
            {
                question: "What does section 110.3 cover?",
                options: ["Examination", "Installation", "Use", "Identification"],
                correct: 0,
                explanation: "Section 110.3 covers Examination of Equipment."
            },
            {
                question: "Which section covers the definition of 'Qualified Person'?",
                options: ["100.1", "110.2", "200.1", "250.4"],
                correct: 0,
                explanation: "Section 100.1 defines 'Qualified Person'."
            },
            {
                question: "What does section 210.8 cover?",
                options: ["GFCI Protection", "AFCI Protection", "Surge Protection", "Tamper Resistance"],
                correct: 0,
                explanation: "Section 210.8 covers Ground-Fault Circuit-Interrupter Protection."
            },
            {
                question: "Which section covers conductor ampacity?",
                options: ["300.1", "310.15", "310.16", "310.17"],
                correct: 1,
                explanation: "Section 310.15 covers Ampacities for Conductors."
            },
            {
                question: "What does section 250.53 cover?",
                options: ["Grounding Electrode", "Grounding Electrode System", "Bonding", "Equipment Grounding"],
                correct: 0,
                explanation: "Section 250.53 covers Grounding Electrode System."
            },
            {
                question: "Which section covers box fill calculations?",
                options: ["300.14", "314.16", "314.28", "370.10"],
                correct: 1,
                explanation: "Section 314.16 covers Number of Conductors in Outlet, Device, and Junction Boxes."
            },
            {
                question: "What does section 408.36 cover?",
                options: ["Panelboard Overcurrent Protection", "Panelboard Short-Circuit Current Rating", "Panelboard Grounding", "Panelboard Identification"],
                correct: 0,
                explanation: "Section 408.36 covers Overcurrent Protection."
            },
            {
                question: "Which section covers AFCI requirements?",
                options: ["200.4", "210.12", "240.4", "250.4"],
                correct: 1,
                explanation: "Section 210.12 covers Arc-Fault Circuit-Interrupter Protection."
            },
            {
                question: "What does section 430.6 cover?",
                options: ["Motor Nameplate", "Motor Disconnecting Means", "Motor Branch-Circuit Protection", "Motor Controller"],
                correct: 0,
                explanation: "Section 430.6 covers Motor Nameplate Data."
            },
            {
                question: "Which section covers equipment grounding conductor sizing?",
                options: ["240.4", "250.122", "310.15", "314.16"],
                correct: 1,
                explanation: "Section 250.122 covers Size of Equipment Grounding Conductors."
            }
        ]
    },

    tables: {
        title: "Tables & Figures",
        questions: [
            {
                question: "Which table provides conductor ampacity information?",
                options: ["Table 250.122", "Table 310.15(B)(16)", "Table 314.16", "Table 430.247"],
                correct: 1,
                explanation: "Table 310.15(B)(16) provides Allowable Ampacities for Conductors."
            },
            {
                question: "What does Table 250.122 contain?",
                options: ["Grounding Conductor Sizes", "Conduit Fill", "Motor FLA", "Voltage Drop"],
                correct: 0,
                explanation: "Table 250.122 provides Equipment Grounding Conductor Sizes."
            },
            {
                question: "Which table covers conduit fill requirements?",
                options: ["Table 300.5", "Table 310.15", "Table 314.16", "Table 430.6"],
                correct: 2,
                explanation: "Table 314.16 covers Conduit and Tubing Fill."
            },
            {
                question: "What does Table 430.247 provide?",
                options: ["Motor Full-Load Current", "Motor Efficiency", "Motor Power Factor", "Motor Starting Current"],
                correct: 0,
                explanation: "Table 430.247 provides Motor Full-Load Current values."
            },
            {
                question: "Which table contains overcurrent protection sizing?",
                options: ["Table 240.6", "Table 250.122", "Table 310.15", "Table 430.247"],
                correct: 0,
                explanation: "Table 240.6 provides Maximum Number of Conductors in Raceway."
            },
            {
                question: "What does Table 300.5 cover?",
                options: ["Minimum Cover Requirements", "Conduit Bending Radius", "Cable Tray Fill", "Raceway Support"],
                correct: 0,
                explanation: "Table 300.5 provides Minimum Cover Requirements."
            },
            {
                question: "Which table provides transformer full-load current?",
                options: ["Table 310.15", "Table 430.247", "Table 450.3", "Table 700.1"],
                correct: 2,
                explanation: "Table 450.3 provides Transformer Full-Load Current."
            },
            {
                question: "What does Table 210.24 contain?",
                options: ["Branch-Circuit Requirements", "Feeder Requirements", "Service Requirements", "Grounding Requirements"],
                correct: 0,
                explanation: "Table 210.24 provides Branch-Circuit Requirements."
            },
            {
                question: "Which table covers wire bending space?",
                options: ["Table 300.5", "Table 312.6", "Table 314.16", "Table 430.247"],
                correct: 1,
                explanation: "Table 312.6 provides Wire Bending Space at Terminals."
            },
            {
                question: "What does Table 310.104 provide?",
                options: ["Conductor Resistance", "Conductor Reactance", "Conductor Impedance", "Conductor Temperature Rating"],
                correct: 0,
                explanation: "Table 310.104 provides Conductor Resistance values."
            }
        ]
    },

    definitions: {
        title: "Definitions & Terms",
        questions: [
            {
                question: "What is the definition of 'Qualified Person'?",
                options: ["Anyone with electrical experience", "One familiar with construction and operation of equipment", "A licensed electrician", "An electrical engineer"],
                correct: 1,
                explanation: "A Qualified Person is one familiar with the construction and operation of the equipment and the hazards involved."
            },
            {
                question: "What does 'GFCI' stand for?",
                options: ["General Fault Current Interrupter", "Ground Fault Circuit Interrupter", "General Fuse Current Interrupter", "Ground Fuse Circuit Interrupter"],
                correct: 1,
                explanation: "GFCI stands for Ground-Fault Circuit-Interrupter."
            },
            {
                question: "What is a 'Branch Circuit'?",
                options: ["Main power feed", "Circuit from final overcurrent device to load", "Grounding conductor path", "Service entrance conductors"],
                correct: 1,
                explanation: "A Branch Circuit is the circuit conductors between the final overcurrent device and the load(s)."
            },
            {
                question: "What does 'NEC' stand for?",
                options: ["National Electrical Code", "National Electric Current", "National Equipment Code", "National Electrical Council"],
                correct: 0,
                explanation: "NEC stands for National Electrical Code."
            },
            {
                question: "What is a 'Feeder'?",
                options: ["Small branch circuit", "Circuit conductors from service to branch circuit", "Equipment grounding conductor", "Neutral conductor"],
                correct: 1,
                explanation: "A Feeder is all circuit conductors between the service equipment and the final branch-circuit overcurrent device."
            },
            {
                question: "What does 'AFCI' stand for?",
                options: ["Arc Fault Current Interrupter", "Arc Fault Circuit Interrupter", "Automatic Fault Current Interrupter", "Automatic Fault Circuit Interrupter"],
                correct: 1,
                explanation: "AFCI stands for Arc-Fault Circuit-Interrupter."
            },
            {
                question: "What is 'Ampacity'?",
                options: ["Voltage rating", "Current-carrying capacity", "Resistance value", "Power factor"],
                correct: 1,
                explanation: "Ampacity is the maximum current that a conductor can carry continuously."
            },
            {
                question: "What does 'NEMA' stand for?",
                options: ["National Electrical Manufacturers Association", "National Equipment Manufacturers Association", "National Electrical Maintenance Association", "National Electric Motor Association"],
                correct: 0,
                explanation: "NEMA stands for National Electrical Manufacturers Association."
            },
            {
                question: "What is a 'Service'?",
                options: ["Branch circuit", "Conductors from utility to premises", "Equipment grounding", "Overcurrent protection"],
                correct: 1,
                explanation: "Service is the conductors and equipment for delivering electric energy from the serving utility to the wiring system of the premises."
            },
            {
                question: "What does 'UL' stand for?",
                options: ["Underwriters Laboratories", "United Laboratories", "Utility Laboratories", "Universal Laboratories"],
                correct: 0,
                explanation: "UL stands for Underwriters Laboratories."
            }
        ]
    },

    appendix: {
        title: "Appendix Content",
        questions: [
            {
                question: "What does Appendix A contain?",
                options: ["Product Safety Standards", "Reference Standards", "Calculations", "Code History"],
                correct: 0,
                explanation: "Appendix A contains Product Safety Standards."
            },
            {
                question: "Which appendix covers Reference Standards?",
                options: ["Appendix A", "Appendix B", "Appendix C", "Appendix D"],
                correct: 1,
                explanation: "Appendix B contains Reference Standards."
            },
            {
                question: "What does Appendix C cover?",
                options: ["Connection Diagrams", "Conduit and Tubing Fill Tables", "Electrical Formulas", "Code History"],
                correct: 0,
                explanation: "Appendix C contains Connection Diagrams."
            },
            {
                question: "Which appendix contains Conduit and Tubing Fill Tables?",
                options: ["Appendix B", "Appendix C", "Appendix D", "Appendix E"],
                correct: 1,
                explanation: "Appendix C contains Conduit and Tubing Fill Tables."
            },
            {
                question: "What does Appendix D cover?",
                options: ["Ampacity Calculations", "Electrical Formulas", "Example Calculations", "Code Changes"],
                correct: 1,
                explanation: "Appendix D contains Electrical Formulas."
            },
            {
                question: "Which appendix covers Example Calculations?",
                options: ["Appendix D", "Appendix E", "Appendix F", "Appendix G"],
                correct: 1,
                explanation: "Appendix E contains Example Calculations."
            },
            {
                question: "What does Appendix F contain?",
                options: ["Availability and Reliability", "Code History", "Product Standards", "Formulas"],
                correct: 0,
                explanation: "Appendix F contains Availability and Reliability for Critical Operations."
            },
            {
                question: "Which appendix covers Code History?",
                options: ["Appendix F", "Appendix G", "Appendix H", "Appendix I"],
                correct: 1,
                explanation: "Appendix G contains a Code History Log."
            },
            {
                question: "What does Appendix H cover?",
                options: ["Administration and Enforcement", "Code Changes", "Standards", "Calculations"],
                correct: 0,
                explanation: "Appendix H contains Administration and Enforcement."
            },
            {
                question: "Which appendix contains Annex A through Annex J?",
                options: ["Main Code", "Informational Annexes", "Appendices", "Tables"],
                correct: 1,
                explanation: "Annexes A through J are informational annexes following the main code."
            }
        ]
    },

    equations: {
        title: "Electrical Equations",
        questions: [
            {
                question: "What is the formula for voltage drop in a conductor?",
                options: ["VD = I × R", "VD = (2 × K × I × L) / CM", "VD = P / I", "VD = V × I"],
                correct: 1,
                explanation: "The voltage drop formula is VD = (2 × K × I × L) / CM, where K is resistivity constant, I is current, L is length, and CM is circular mil area."
            },
            {
                question: "How do you calculate conductor ampacity adjustment for temperature?",
                options: ["Multiply by temperature factor", "Divide by temperature factor", "Add temperature correction", "Subtract temperature correction"],
                correct: 0,
                explanation: "Conductor ampacity is adjusted by multiplying the table value by the appropriate temperature correction factor from Table 310.15(B)(3)(a)."
            },
            {
                question: "What is the formula for single-phase power?",
                options: ["P = V × I", "P = V² / R", "P = I² × R", "P = V × I × PF"],
                correct: 3,
                explanation: "Single-phase power is calculated as P = V × I × PF, where PF is power factor."
            },
            {
                question: "How is motor full-load current calculated?",
                options: ["FLA = HP × 746 / (V × PF × Eff)", "FLA = HP × 746 / V", "FLA = HP / V", "FLA = V / HP"],
                correct: 0,
                explanation: "Motor full-load amperes = (HP × 746) / (V × PF × Efficiency), as shown in Table 430.247."
            },
            {
                question: "What is the formula for three-phase power?",
                options: ["P = V × I × PF", "P = √3 × V × I × PF", "P = 3 × V × I", "P = V² / R"],
                correct: 1,
                explanation: "Three-phase power is P = √3 × V × I × PF, where V is line-to-line voltage."
            },
            {
                question: "How do you calculate box fill volume?",
                options: ["Volume = Length × Width × Height", "Volume = (Conductors × Cross-section) + Device volume", "Volume = Total conductor area", "Volume = Box size rating"],
                correct: 1,
                explanation: "Box fill is calculated by summing the volumes of all conductors plus the volume allowances for devices, as per 314.16."
            },
            {
                question: "What is the formula for conductor resistance?",
                options: ["R = ρ × L / A", "R = V / I", "R = P / I²", "R = V² / P"],
                correct: 0,
                explanation: "Conductor resistance R = ρ × L / A, where ρ is resistivity, L is length, and A is cross-sectional area."
            },
            {
                question: "How is transformer full-load current calculated?",
                options: ["I = VA / V", "I = P / V", "I = √3 × VA / V", "I = VA / (√3 × V)"],
                correct: 0,
                explanation: "For single-phase transformers, I = VA / V. For three-phase, I = VA / (√3 × V)."
            },
            {
                question: "What is the formula for short-circuit current at a point?",
                options: ["I_sc = V / Z", "I_sc = V × I", "I_sc = P / V", "I_sc = R × I"],
                correct: 0,
                explanation: "Available short-circuit current I_sc = V / Z, where Z is the system impedance."
            },
            {
                question: "How do you calculate demand load for a service?",
                options: ["Sum all loads directly", "Apply demand factors from Table 220.42", "Use only the largest load", "Divide total load by 2"],
                correct: 1,
                explanation: "Service demand load is calculated by applying demand factors from Table 220.42 to the computed load."
            }
        ]
    }
};
