import { useEffect, useReducer } from 'react';
import Button from '../Button/Button';
import styles from './JournalForm.module.css';
import cn from 'classnames';
import { formReducer } from './JournalForm.state';
import { INITIAL_STATE } from './JournalForm.state';

function JournalForm ({onSubmit}) {

    const [formState, dispathcForm] = useReducer(formReducer, INITIAL_STATE);

    useEffect(() => {
        let timerId;
        if(!formValidState.date || !formValidState.title || !formValidState.text)
            timerId = setTimeout(() => {
                dispathcForm({type})
                setFormValidState(INITIAL_STATE);
            }, 700);
            return () => {
                clearTimeout(timerId);
            };
        },
    [formValidState]);

    const addJournalItem = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formProps = Object.fromEntries(formData);
        let isFormValid = true;
        if (!formProps.title?.trim().length) {
            setFormValidState(state => ({...state, title: false}));
            isFormValid = false;
        }
        else {
            setFormValidState(state => ({...state, title: true }));
        }
        if (!formProps.text?.trim().length) {
            setFormValidState(state => ({...state, text: false}));
            isFormValid = false;
        }
        else {
            setFormValidState(state => ({...state, text: true }));
        }
        if (!formProps.date) {
            setFormValidState(state => ({...state, date: false}));
            isFormValid = false;
        }       
        else {
            setFormValidState(state => ({...state, date: true }));
        }
        if (!isFormValid) {
            return;
        }
        onSubmit(formProps);
    };

    return (
            <form className={styles['journal-form']} onSubmit={addJournalItem }>
                <div>
                <input type="text" name='title' className={cn(styles['input-title'], {
                [styles['invalid']] : !formValidState.title })}/>
                </div>

                <div className={styles['form-row']}>
                <label htmlFor="date" className={styles['form-label']}>
                    <img src="/calendar.svg" alt="calendar"/>
                    <span> Date </span>
                </label>
                <input type="date" name='date' id='date' className={cn(styles['input'], {
                [styles['invalid']] : !formValidState.date })}/>
                </div>
                
                <div className={styles['form-row']}>
                <label htmlFor="tag" className={styles['form-label']}>
                    <img src="/tag.svg" alt="tag"/>
                    <span> Tag </span>
                </label>
                <input type="text" name='tag' id='tag' className={cn(styles['input'], {
                [styles['invalid']] : !formValidState.date })}/>
                </div>
            <textarea name="text" id="" cols="30" rows="10" className={cn(styles['input'], {
                [styles['invalid']] : !formValidState.text })}>

                </textarea>
            <Button text="save"/>
            </form>
    );
}

export default JournalForm;