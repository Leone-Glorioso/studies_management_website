import React from 'react'

import styles from './Teacher_Sidebar.css'

const Teacher_Sidebar = (props) => {
    return (
        <div className={styles['container']}>
            <div className={styles['teachersmessages22']}>
                <div className={styles['sidebar']}>
                    <div className={styles['settings']}>
                        <img
                            src="/cog1825-htai.svg"
                            alt="cog1825"
                            className={styles['cog']}
                        />
                        <span className={styles['text']}>
              <span>Ρυθμίσεις</span>
            </span>
                    </div>
                    <div className={styles['sideheader']}>
                        <img
                            src="/usercircle1825-27tt.svg"
                            alt="usercircle1825"
                            className={styles['usercircle']}
                        />
                        <span className={styles['text02']}>
              <span>
                <span>ΟΝΟΜΑ-</span>
                <br></br>
                <span>ΕΠΩΝΥΜΟ</span>
              </span>
            </span>
                    </div>
                    <img
                        src="/line21825-9qta.svg"
                        alt="Line21825"
                        className={styles['line2']}
                    />
                    <img
                        src="/line31825-0ne.svg"
                        alt="Line31825"
                        className={styles['line3']}
                    />
                    <div className={styles['logout']}>
            <span className={styles['text07']}>
              <span>Αποσύνδεση</span>
            </span>
                        <img
                            src="/logout1825-ya8b.svg"
                            alt="logout1825"
                            className={styles['logout1']}
                        />
                    </div>
                    <div className={styles['help']}>
            <span className={styles['text09']}>
              <span>Βοήθεια</span>
            </span>
                        <img
                            src="/questionmarkcircle1825-108.svg"
                            alt="questionmarkcircle1825"
                            className={styles['questionmarkcircle']}
                        />
                    </div>
                    <div className={styles['frame']}>
            <span className={styles['text11']}>
              <span>Ημερολόγιο</span>
            </span>
                    </div>
                    <div className={styles['frame1']}>
            <span className={styles['text13']}>
              <span>Μηνύματα</span>
            </span>
                    </div>
                    <div className={styles['frame2']}>
            <span className={styles['text15']}>
              <span>Ανακοινώσεις</span>
            </span>
                    </div>
                    <div className={styles['vathmologio']}>
            <span className={styles['text17']}>
              <span>Βαθμολόγιο</span>
            </span>
                    </div>
                    <div className={styles['frame3']}>
            <span className={styles['text19']}>
              <span>Μαθήματα</span>
            </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Teacher_Sidebar