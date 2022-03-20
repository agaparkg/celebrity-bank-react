import React from 'react';
import MoviesModal from './MoviesModal.jsx';

const CelebritiesComp = ({
  handleCloseModal,
  handleOpenModal,
  showModal,
  modalContentData,
  celebrities,
}) => {
  return (
    <div>
      <ul className='movies'>
        {celebrities.map((celebrity) => {
          const castedIn = celebrity.known_for.map((movie) => movie.title);
          return (
            <li key={celebrity.id} className='movie'>
              <img
                onClick={() => handleOpenModal(celebrity.id)}
                src={`http://image.tmdb.org/t/p/w185${celebrity.profile_path}`}
                alt='celebrity avatar'
              />
              <div className='celeb-name'>
                <strong>{celebrity.name}</strong>
              </div>
              <div className='celeb-name'>{castedIn.join(', ')}</div>
            </li>
          );
        })}
      </ul>
      <MoviesModal
        handleCloseModal={handleCloseModal}
        handleOpenModal={handleOpenModal}
        showModal={showModal}
        modalContentData={modalContentData}
      />
    </div>
  );
};

export default CelebritiesComp;
