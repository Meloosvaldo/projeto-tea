import React from 'react';
import { View } from 'react-native';
import {Text} from 'react-native-svg';
import { PieChart } from 'react-native-svg-charts';

export default function TelaEvolucaoProfissional(){
    
    const data = [30, 25, 10, 20, 12];

    const pieData = data.map((value, index) => ({
                value,
                key: `${index}-${value}`,
                svg: {
                   fill:( '#' + ((Math.random() * 0xffffff) << 0).toString(16) + '000000').slice(0, 7)
                }
            }));
    
    const Label = ({slices}) => {
        return slices.map((slice, index) => {
            const {pieCentroid, data} = slice;
            return (
             <Text
                key={`label-${index}`}
                x={pieCentroid[0]}
                y={pieCentroid[1]}
                fill="white"
                textAnchor={"middle"}
                alignmentBaseLine={"middle"}
                fontSize={12}
              >
                {data.value}%
             </Text>
          
            )
        })
    }

    return (
        <View style={{ height: "100%", justifyContent: "center" }}>
        <PieChart style={{width: 380, height:180}} data={pieData}>
        <Label/>
        </PieChart>
        </View>
    )
}
