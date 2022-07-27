import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { InputTextNote, NumberOfChars, P, Wrapper } from './Note.style';

// eslint-disable-next-line react/prop-types
const Note = ({ number, text, index, setNotes }) => {
  const [numberOfChars, setNumberOfChars] = useState(number);
  const [noteText, setNoteText] = useState(text);
  const [isInput, setIsInput] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const handleOnClick = () => {
    setIsInput(true);
    setIsEdit(true);
  };

  const handleOnChange = (e) => {
    if (numberOfChars > 0) {
      setNoteText(e.target.value);
      setNumberOfChars(() => 150 - e.target.value.length);
      return;
    }

    if (e.target.value.length < noteText.length) {
      setNoteText(e.target.value);
      setNumberOfChars(() => 150 - e.target.value.length);
    }
  };

  const handleOnEnter = () => {
    if (noteText === '') {
      setNoteText('Click to edit');
      setNumberOfChars(137);
    }
    setIsInput(false);
    setIsEdit(false);
  };

  useEffect(() => {
    if (isInput === true) return;

    setNotes((prev) => {
      return prev.map((item) => {
        if (item.id === index) {
          return { ...item, text: noteText, number: numberOfChars };
        }
        return item;
      });
    });
  }, [isInput]);

  return (
    <Wrapper onClick={handleOnClick} isEdit={isEdit}>
      {isInput ? (
        <InputTextNote
          onChange={handleOnChange}
          onKeyDown={(e) =>
            e.code === 'Enter' || e.code === 'NumpadEnter'
              ? handleOnEnter()
              : null
          }
          value={noteText}
        >
          {/* sda */}
        </InputTextNote>
      ) : (
        <P>{noteText}</P>
      )}
      <NumberOfChars>{numberOfChars}</NumberOfChars>
    </Wrapper>
  );
};

Note.propTypes = {
  text: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};

export default Note;
