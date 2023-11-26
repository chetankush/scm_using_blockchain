import React, { useEffect, useState } from 'react';
import Web3Modal from 'web3modal';
import { ethers } from 'ethers';
import tracking from './Tracking.json';

const ContractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
const ContractABI = tracking.abi;

const fetchContract = (signerOrProvider) =>
  new ethers.Contract(ContractAddress, ContractABI, signerOrProvider);

export const TrackingContext = React.createContext();

export const TrackingProvider = ({ children }) => {
  const DappName = 'product tracking dapp';
  const [currentUser, setCurrentUser] = useState('');
  const [allShipmentsdata, setAllShipmentsdata] = useState([]);


  const createShipment = async (items) => {
    console.log('Start of createShipment function', items);
    const { receiver, pickupTime, distance, price } = items;

    try {
      const web3Modal = new Web3Modal();
      const connection = await web3Modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);
      const signer = provider.getSigner();
      const contract = fetchContract(signer);

      console.log('Creating shipment...');
      const createItem = await contract.createShipment(
        receiver,
        new Date(pickupTime).getTime(),
        distance,
        ethers.utils.parseUnits(price, 18),
        {
          value: ethers.utils.parseUnits(price, 18),
        }
      );
      // await createItem.wait();
      const receipt = await createItem.wait();
      console.log('Fetching updated shipments...');
      const updatedShipments = await getAllShipment();
      console.log('Updated shipments:', updatedShipments);


      console.log('Shipment is created with this data', createItem);

    } catch (error) {
      console.log('Error in createShipment:', error);
    }
  };



  const getAllShipment = async () => {
    try {
      // Connect to your Ethereum provider
      const provider = new ethers.providers.JsonRpcProvider();

      // Fetch your contract instance
      const contract = fetchContract(provider);

      // Call the getAllTransactions function
      const shipments = await contract.getAllTransactions();

      // Format and process the data
      console.log('Raw Shipments:', shipments);

      const allShipments = shipments.map((shipment) => ({
        sender: shipment.sender,
        receiver: shipment.receiver,
        price: ethers.utils.formatEther(shipment.price.toString()),
        pickupTime: shipment.pickupTime.toNumber(),
        deliveryTime: shipment.deliveryTime.toNumber(),
        distance: shipment.distance.toNumber(),
        isPaid: shipment.isPaid,
        status: shipment.status,
      }));

      console.log('ALL SHIPMENTS are 0:', allShipments);


      
    // Listen for the 'ShipmentCreated' event
    contract.on('ShipmentCreated', (sender, receiver, pickupTime, distance, price) => {
      console.log('Shipment Created Event:', sender, receiver, pickupTime, distance, price);
    });
      console.log('returned shipments should be one :', allShipments);
      return allShipments;


    } catch (error) {
      console.log('Error in getAllShipment:', error);
    }
  };



  const getShipmentsCount = async () => {
    try {
      if (!window.ethereum) return 'Install Metamask';
      const accounts = await window.ethereum.request({
        method: 'eth_accounts',
      });

      const provider = new ethers.providers.JsonRpcProvider();
      const contract = fetchContract(provider);
      const shipmentsCount = await contract.getShipmentsCount(accounts[0]);
      return shipmentsCount.toNumber();
    } catch (error) {
      console.log('Error in getting shipment count:', error);
    }
  };

  const completeShipment = async (completeShipment) => {
    console.log(completeShipment);
    const { receiver, index } = completeShipment;
    try {
      if (!window.ethereum) return 'Install MetaMask';

      const accounts = await window.ethereum.request({
        method: 'eth_accounts',
      });

      const web3Modal = new Web3Modal();
      const connection = await web3Modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);
      const signer = provider.getSigner();
      const contract = fetchContract(signer);

      const transaction = await contract.completeShipment(
        accounts[0],
        receiver,
        index,
        {
          gasLimit: 300000,
        }
      );
      transaction.wait();
      console.log(transaction);
    } catch (error) {
      console.log('Wrong complete shipment', error);
    }
  };

  const getShipment = async (index) => {
    console.log(index * 1);
    try {
      if (!window.ethereum) return 'Install MetaMask';

      const accounts = await window.ethereum.request({
        method: 'eth_accounts',
      });

      const provider = new ethers.providers.JsonRpcProvider();
      const contract = fetchContract(provider);
      const shipment = await contract.getShipment(accounts[0], index * 1);

      const SingleShipment = {
        sender: shipment[0],
        receiver: shipment[1],
        pickupTime: shipment[2].toNumber(),
        deliveryTime: shipment[3].toNumber(),
        distance: shipment[4].toNumber(),
        price: ethers.utils.formatEther(shipment[5].toString()),
        status: shipment[6],
        isPaid: shipment[7],
      };


      return SingleShipment;
      console.log(SingleShipment)
    } catch (error) {
      console.log('no shipment fetched:', error);
    }
  };

  const startShipment = async (getProduct) => {
    const { receiver, index } = getProduct;

    try {
      if (!window.ethereum) return 'Install MetaMask';

      const accounts = await window.ethereum.request({
        methode: 'eth_accounts',
      });

      const web3Modal = new Web3Modal();
      const connection = await web3Modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);
      const signer = provider.getSigner();
      const contract = fetchContract(signer);
      const shipment = await contract.startShipment(
        accounts[0],
        receiver,
        index * 1
      );

      shipment.wait();
      console.log(shipment);
    } catch (error) {
      return "not Connected";
      console.log('Sorry, no shipment', error);
    }
  };

  const checkWalletConnected = async () => {
    try {
      if (!window.ethereum) return 'Install MetaMask';

      const accounts = await window.ethereum.request({
        method: 'eth_accounts',
      });

      if (accounts.length) {
        setCurrentUser(accounts[0]);
      } else {
        return 'No account';
      }
    } catch (error) {
      console.error('Error in connecting:', error);
    }
  };

  // connect wallet function

  const connectWallet = async () => {
    try {
      if (!window.ethereum) return 'Install MetaMask';

      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });

      setCurrentUser(accounts[0]);
    } catch (error) {
      return 'Something went wrong';
    }
  };

  useEffect(() => {
    checkWalletConnected();
  }, []);

  return (
    <TrackingContext.Provider
      value={{
        connectWallet,
        createShipment,
        getAllShipment,
        completeShipment,
        getShipment,
        startShipment,
        getShipmentsCount,
        DappName,
        currentUser,
      }}
    >
      {children}
    </TrackingContext.Provider>
  );
};

export default TrackingContext;
