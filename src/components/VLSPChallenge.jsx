import React from "react";

const VLSPChallengeDescription = () => (
  <div className="px-5 pt-10 items-center space-y-4">
    <h1 className="text-3xl font-bold mb-4">
      VLSP 2023 Challenge on Legal Textual Entailment Recognition
    </h1>
    <p className="text-slate-500 text-lg">
      The VLSP 2023 Challenge on Legal Textual Entailment Recognition is a
      significant competition hosted by the Vietnamese Language Processing
      (VLSP) workshop, focusing on advancing natural language processing (NLP)
      applications within the legal domain for the Vietnamese language. In the
      rapidly evolving field of AI, particularly in NLP tasks, this challenge
      addresses the crucial need for AI-driven analysis and processing of legal
      texts.
    </p>
    <p className="text-slate-500 text-lg">
      Participants in the challenge are tasked with developing systems that can
      accurately determine the legal relationship between a given legal
      statement and a relevant legal passage. The fundamental goal is to
      ascertain whether a provided set of legal passages entails a specific
      legal statement. This entails exploring the applications of NLP, deep
      learning, and generative AI to detect intricate relationships between
      lengthy legal passages and quoted statements.
    </p>
    <p className="text-slate-500 text-lg">
      The challenge provides training and test datasets in JSON format, allowing
      participants to develop and evaluate their systems effectively. The
      evaluation metric is accuracy, emphasizing correct yes/no label
      confirmation. Participants are encouraged to leverage open research
      resources but are restricted from using closed and proprietary services,
      fostering a spirit of open collaboration.
    </p>
    <p className="text-slate-500 text-lg">
      Teams are required to submit their system predictions along with
      encapsulated Docker images, and a technical report detailing their
      methodologies. The top-performing team will have the opportunity for an
      oral presentation at the workshop, while other teams will showcase their
      work through poster sessions. This challenge not only pushes the
      boundaries of NLP but also contributes to the development of legal AI
      tasks in the Vietnamese language.
    </p>
  </div>
);

const VLSPChallenge = () => (
  <div>
    <VLSPChallengeDescription />
  </div>
);

export default VLSPChallenge;
