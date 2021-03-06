import React from 'react';
import { View } from 'react-native';
import moment from 'moment';
import 'moment/locale/es';
import CalendarStrip from 'react-native-calendar-strip';
import { useState } from 'react/cjs/react.development';



export default function Calendar({ setSelectedDate }) {

    const [date, setDate] = useState(moment());
    let customDatesStyles = []
    let startDate = moment()

    for (let i = 0; i < 7; i++) {
        let date = startDate.clone().add(i, 'days');

        customDatesStyles.push({
            startDate: date, 
            dateNameStyle: { color: 'white' },
            dateNumberStyle: { color: 'white' },
            highlightDateNameStyle: { color: 'white' },
            highlightDateNumberStyle: { color: 'white' },
            dateContainerStyle: { backgroundColor: '#584799' },
        });

        const storeData = async (date) => {
            try {
                await AsyncStorage.setItem('@storage_Date', date);
            } catch (e) {
            
            }
        }

        const onDateSelected = date => {
            setDate(date.format('YYYY-MM-DD'));
            setSelectedDate(date.format('YYYY-MM-DD'));
        }

        storeData(date)
        return (
            <View>
                <CalendarStrip

                    onDateSelected={onDateSelected}
                    onPress={storeData}
                    calendarAnimation={{ type: 'sequence', duration: 30 }}
                    daySelectionAnimation={{ type: 'border', duration: 200, borderWidth: 1, borderHighlightColor: 'white' }}
                    customDatesStyles={customDatesStyles}
                    style={{ height: 100, paddingTop: 20, paddingBottom: 10 }}
                    calendarHeaderStyle={{ color: '#584799' }}
                    calendarColor={'#fff'}
                    dateNumberStyle={{ color: '#B8ADE2' }}
                    dateNameStyle={{ color: '#B8ADE2' }}
                    highlightDateNumberStyle={{ color: '#584799' }}
                    highlightDateNameStyle={{ color: '#584799' }}
                    disabledDateNameStyle={{ color: '#584799' }}
                    disabledDateNumberStyle={{ color: '#584799' }}              
                    iconContainer={{ flex: 0.1 }}

                />
            </View>
        );
    }
}