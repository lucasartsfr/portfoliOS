import React, { useEffect, useState } from 'react';

const ExternalPage = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    // URL de la page externe que vous souhaitez intégrer
    const externalURL = 'https://simsr3f.vercel.app/';

    // Récupérer le contenu de l'URL externe
    fetch(externalURL)
      .then(response => response.text())
      .then(data => setContent(data))
      .catch(error => console.error('Erreur lors de la récupération du contenu', error));
  }, []);

  return (
    <div>
      <h1>Contenu de la page externe :</h1>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default ExternalPage;