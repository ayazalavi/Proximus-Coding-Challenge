import { add } from '../data/slice';
import { useDispatch } from 'react-redux'
import { Platform } from 'react-native';

export function importHandler(setFile, devices) {
        if(Platform.OS == 'ios' || Platform.OS == "android") {
            var RNFS = require('react-native-fs');
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

            const importDevices = async () => {
                let data = await RNFS.readFile(path, 'utf8');
                data = JSON.parse(data);
                data.forEach(device => {                
                    if (!devices.find(d => d.id === device.id)) {
                        dispatch(add(device));
                    }
                });
            };
            return { checkFile, exportDevices, importDevices };
        } 
        else if(Platform.OS == "web") {
            const dispatch = useDispatch()
            const checkFile = async () => {
                if (localStorage.getItem("json"))
                    setFile(true);
                else
                    setFile(false);
            };

            const exportDevices = async (json) => {
                localStorage.setItem("json", json);
                checkFile();                
            };

            const importDevices = async (json) => {
                let data = localStorage.getItem("json");
                data = JSON.parse(data);
                data.forEach(device => {
                    if (!devices.find(d => d.id === device.id)) {
                        dispatch(add(device));
                    }
                });
            };
            return { checkFile, exportDevices, importDevices };
        }
    }