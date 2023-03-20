import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import { request } from '../utils/frontEnd';
import ClientTable from '../components/tables/client';
import Modal from '../components/modal';

import { Client } from '../types/client';
import { useRouter } from 'next/router';

const Index: NextPage = () => {

    const router = useRouter();
    // get the value of param named hightlight from the query
    const { highlight } = router.query

    const [clients, setClients] = useState<Client[]>([]);
    const [highlightId, setHighlightId] = useState<string | string[] | undefined>('');
    const [open, setOpen] = useState<boolean>(false);


    useEffect(() => {
        setHighlightId(highlight);
        request('GET', '/clients').then((res) => {
            if (res.status === 200) {
                console.log(res.body.clients);
                setClients(res.body.clients.map((client: any) => {
                    return {
                        id: client.id,
                        avatar: client.avatar,
                        email: client.email,
                        fullName: client.firstName + ' ' + client.lastName,
                        sex: client.sex,
                        birthday: client.birthday,
                        supportTier: client.supportTier,
                        hourlyRate: client.hourlyRate
                    }
                }))
            } else if (res.status === 400) {
                console.log(res.body.error);
                setClients([])
            }
        }).catch((err) => {
            console.log(err);
        })
    }, [highlight]);

    const onRegister = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleRegister = () => {
        request('POST', '/clients').then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        });
        setOpen(false);
    };

    return (
        <>
            <ClientTable clients={clients} onRegister={onRegister} highlightId={highlightId} />
            <Modal open={open} handleClose={handleClose} handleRegister={handleRegister} />
        </>
    );
};

export default Index;
