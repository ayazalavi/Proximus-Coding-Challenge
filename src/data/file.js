var RNFS = require('react-native-fs');
import { add } from '../data/slice';
import { useDispatch } from 'react-redux'

export function importHandler(setFile, devices) {
        var path = RNFS.DocumentDirectoryPath + '/import.json';
        const dispatch = useDispatch()
        const checkFile = async () => {
            if (await RNFS.exists(path))
                setFile(true);
            else
                setFile(false);
        };

        const exportDevices = async (json) => {
            let success = RNFS.writeFile(path, json, 'utf8');
            if (success) {
                checkFile();
            }
        };

        const importDevices = async (json) => {
            let data = await RNFS.readFile(path, json, 'utf8');
            data = JSON.parse(data);
            data.forEach(device => {
                if (!devices.find(d => d.id === device.id)) {
                    dispatch(add(device));
                }
            });
        };
        return { checkFile, exportDevices, importDevices };
    }