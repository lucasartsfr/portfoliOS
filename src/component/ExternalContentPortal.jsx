import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

const ExternalContentPortal = ({ url }) => {
  const portalNodeRef = useRef(null);

  useEffect(() => {
    const portalNode = document.createElement('div');
    portalNodeRef.current = portalNode;
    document.body.appendChild(portalNode);

    // Charger le contenu de l'URL dans le portail
    fetch(url)
      .then(response => response.text())
      .then(data => {
        // Utiliser createPortal pour afficher le contenu dans le portail
        createPortal(<div dangerouslySetInnerHTML={{ __html: data }} />, portalNode);
      });

    return () => {
      // Nettoyer le portail lorsqu'il est démonté
      if (portalNodeRef.current) {
        document.body.removeChild(portalNodeRef.current);
      }
    };
  }, [url]);

  return null; // Rien à afficher dans le composant principal, tout est dans le portail
};

export default ExternalContentPortal;
