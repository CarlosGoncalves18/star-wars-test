<?php

namespace App\Http\Controllers;

use GuzzleHttp\Client;
use Illuminate\Http\Request;

class SwapiController extends Controller
{
    private $client;

    public function __construct()
    {
        $this->client = new Client([
            'base_uri' => 'https://swapi.dev/api/',
            'http_errors' => false,
        ]);
    }

    public function getPeople(Request $request)
    {
        $page = $request->query('page', 1);
        $response = $this->client->get('people', [
            'query' => [
                'page' => $page
            ]
        ]);
        $people = json_decode($response->getBody(), true);

        return response()->json($people);
    }

    public function getPlanets(Request $request)
    {
        $page = $request->query('page', 1);
        $response = $this->client->get('planets', [
            'query' => [
                'page' => $page
            ]
        ]);
        $planets = json_decode($response->getBody(), true);

        return response()->json($planets);
    }

    public function getStarships(Request $request)
    {
        $page = $request->query('page', 1);
        $response = $this->client->get('starships', [
            'query' => [
                'page' => $page
            ]
        ]);
        $starships = json_decode($response->getBody(), true);

        return response()->json($starships);
    }

    public function searchPeople(Request $request)
    {
        $query = $request->input('search');

        $response = $this->client->request('GET', 'people', [
            'query' => ['search' => $query]
        ]);

        return $response->getBody()->getContents();
    }
}