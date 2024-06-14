"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import {useEffect, useState} from 'react';
import {useRouter} from "next/navigation";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {fetchData, postData} from "@/services/api";


export default  function Hotel()  {

    const [selectedImage, setSeletedImage] = useState(null);
    const [values, setValues] = useState({
        name:"",
        address: "",
        email: "",
        telephone:"",
        pricePerNight: "",
        devise:"",
        imageUrl:null,
    });

    // partie image
    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        setSeletedImage(file);

        // Lire le contenu du fichier en tant que Buffer
        const reader = new FileReader();
        reader.onload = (event) => {
            const buffer = event.target.result;
            setValues({
                ...values,
                imageUrl: buffer,
            });
        };
        reader.readAsArrayBuffer(file);
    };

    //fin

    const [error, setError] = useState("");
    const router = useRouter();

    const [hotels, setHotels] = useState([]);

    //get
    useEffect(() => {
        const getHotels = async () => {
            try {
                const data = await fetchData('/hotels');
                setHotels(data);
            } catch (error) {
                // Les erreurs sont déjà gérées dans fetchData
            }
        };

        getHotels();
    }, []);




    const handleSubmit = async (e) => {
        e.preventDefault();

        const {name, address,email,telephone,devise,pricePerNight,imageUrl} = values;


        try {
            const data = await postData("/hotels", {
                name,
                address,
                email,
                telephone,
                pricePerNight,
                devise,
                imageUrl,

            });

            router.replace("/dashboard/hotel");
            toast.success('Hôtel ajouté avec succès');

        }  catch(error){
            toast.error('Problem adding');
        }

    };



  
    return (
        <form onSubmit={handleSubmit}  className="px-16 py-5" encType="multipart/form-data">
          <div className="flex space-x-4 itemsAddHotel-center">
            <Link href="/dashboard/hotel">
              <ArrowLeft />
            </Link>
            <h2 className="text-2xl font-light uppercase">
              Creer un nouveau hotel
            </h2> 
          </div>
    
          <div className="pb-12 ">
            <div className="grid grid-cols-1 mt-10 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Nom de l'hotel
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    value={values.name}
                    name="name"
                    onChange={handleChange}
                  
                    id="name"
                    placeholder="CAP mamiane"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
    
              <div className="sm:col-span-3">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Adresse
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    
                    onChange={handleChange}
                    name="address"
                    id="address"
                    placeholder="les iles du saloum, nfar"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
    
            <div className="grid grid-cols-1 mt-10 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Email
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    value={values.email}
                    onChange={handleChange}
                    name="email"
                    id="email"

                    placeholder="demo@demo.tech"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
    
              <div className="sm:col-span-3">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Numeros de Telephone
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    value={values.telephone}
                    onChange={handleChange}
                    name="telephone"
                    id="telephone"
                    
                    placeholder="77 777 77 77"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
    
            <div className="grid grid-cols-1 mt-10 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Prix par nuit
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    value={values.pricePerNight}
                    onChange={handleChange}
                    name="pricePerNight"
                    id="pricePerNight"
                    placeholder="25 000 XOF"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
    
              <div className="sm:col-span-3">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Devise
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    value={values.devise}
                    onChange={handleChange}
                    name="devise"
                    id="devise"
                    
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
            </div>
          
    
          <div className="col-span-full">
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Ajouter une photo
            </label>
            <div className="flex justify-center px-6 py-10 mt-2 border border-dashed rounded-lg border-gray-900/25">
              <div className="text-center">
                <svg
                  className="w-12 h-12 mx-auto text-gray-300"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <div className="flex mt-4 text-sm leading-6 text-gray-600">
                  <label className="relative font-semibold text-indigo-600 bg-white rounded-md cursor-pointer focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                    <span>Ajouter une photo</span>
                    <input


                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      name="imageUrl"
                      id="imageUrl"



                      className="sr-only"
                    />
                  </label>

                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row-reverse mt-5">
            <button type="submit" className="px-6 py-2 bg-[#555555] text-white rounded-lg">
              Enregistrer
            </button>
          </div>
        </form>
      );
}

